export default function Home(){return(<div className="grid gap-6">
<div className="card"><h1 className="text-2xl font-semibold mb-2">Wartownik Portal</h1><p>Panel webowy do podglądu odczytów NFC z aplikacji „Wartownik”. Zaloguj się i przejdź do dashboardu, aby oglądać live feed zdarzeń bez przesyłania plików.</p></div>
<div className="card"><h2 className="text-lg font-semibold mb-2">Szybki start</h2><ol className="list-decimal ml-6 space-y-1 text-sm">
<li>Ustaw zmienne środowiskowe <code>NEXT_PUBLIC_SUPABASE_URL</code> i <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> (lub własny backend w <code>NEXT_PUBLIC_EVENTS_SSE_URL</code>).</li>
<li>Uruchom <code>npm run dev</code> i otwórz <code>/dashboard</code>.</li>
<li>Skonfiguruj apkę mobilną, aby wysyłała zdarzenia do API/Realtime.</li></ol></div></div>);}
