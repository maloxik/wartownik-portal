"use client";import LiveFeed from "@/components/LiveFeed";import {useEffect,useState} from "react";import dayjs from "dayjs";
export default function DashboardPage(){const[sseUrl,setSseUrl]=useState<string|undefined>(process.env.NEXT_PUBLIC_EVENTS_SSE_URL);
const[deviceId,setDeviceId]=useState("");const[tagUid,setTagUid]=useState("");const[from,setFrom]=useState(dayjs().subtract(1,"day").format("YYYY-MM-DDTHH:mm"));const[to,setTo]=useState(dayjs().add(1,"hour").format("YYYY-MM-DDTHH:mm"));
useEffect(()=>{setSseUrl(process.env.NEXT_PUBLIC_EVENTS_SSE_URL);},[]);
return(<div className="grid gap-6"><div className="card"><h1 className="text-xl font-semibold mb-3">Dashboard</h1><div className="grid md:grid-cols-4 gap-3">
<div><label className="label">Urządzenie</label><input className="input" value={deviceId} onChange={e=>setDeviceId(e.target.value)} placeholder="np. SM-S911B" /></div>
<div><label className="label">Tag UID</label><input className="input" value={tagUid} onChange={e=>setTagUid(e.target.value)} placeholder="np. 04:A2:BC..." /></div>
<div><label className="label">Od</label><input className="input" type="datetime-local" value={from} onChange={e=>setFrom(e.target.value)} /></div>
<div><label className="label">Do</label><input className="input" type="datetime-local" value={to} onChange={e=>setTo(e.target.value)} /></div>
</div><p className="text-xs text-slate-500 mt-2">Filtry demonstracyjne; po spięciu z API zastosuj je w zapytaniu po stronie serwera / SSE.</p></div><LiveFeed sseUrl={sseUrl} /></div>);}
