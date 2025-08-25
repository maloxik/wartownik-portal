"use client";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

type EventRow = {
  id?: string;
  device_id?: string;
  user_email?: string;
  tag_uid: string;
  ts: string;
  ndef_text?: string | null;
  ndef_uri?: string | null;
  sp_title?: string | null;
  sp_uri?: string | null;
  mime_type?: string | null;
};

export default function LiveFeed({ sseUrl = process.env.NEXT_PUBLIC_EVENTS_SSE_URL }: { sseUrl?: string }) {
  const [rows, setRows] = useState<EventRow[]>([]);
  const [connected, setConnected] = useState(false);
  const esRef = useRef<EventSource | null>(null);

  useEffect(() => {
    if (!sseUrl) return;
    const es = new EventSource(sseUrl, { withCredentials: false });
    esRef.current = es;
    es.onopen = () => setConnected(true);
    es.onerror = () => setConnected(false);
    es.onmessage = (ev) => {
      try {
        const data = JSON.parse(ev.data) as EventRow | EventRow[];
        setRows((prev) => Array.isArray(data) ? [...data, ...prev].slice(0, 200) : [data, ...prev].slice(0, 200));
      } catch {}
    };
    return () => { es.close(); setConnected(false); };
  }, [sseUrl]);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Live feed</h3>
        <span className={`text-xs ${connected ? "text-green-600" : "text-slate-400"}`}>
          {connected ? "połączono" : "rozłączono"}
        </span>
      </div>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Czas</th>
              <th className="py-2 pr-4">Urządzenie</th>
              <th className="py-2 pr-4">Tag UID</th>
              <th className="py-2 pr-4">NDEF</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b last:border-0">
                <td className="py-2 pr-4">{dayjs(r.ts).format("YYYY-MM-DD HH:mm:ss")}</td>
                <td className="py-2 pr-4">{r.device_id ?? "—"}</td>
                <td className="py-2 pr-4 font-mono">{r.tag_uid}</td>
                <td className="py-2 pr-4">
                  {[
                    r.ndef_text ? `TXT="${r.ndef_text}"` : null,
                    r.ndef_uri ? `URI=${r.ndef_uri}` : null,
                    r.sp_title ? `SP_TITLE="${r.sp_title}"` : null,
                    r.sp_uri ? `SP_URI=${r.sp_uri}` : null,
                    r.mime_type ? `MIME=${r.mime_type}` : null,
                  ]
                    .filter(Boolean)
                    .join(" • ") || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
