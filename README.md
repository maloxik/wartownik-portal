# Wartownik Portal (Next.js + Supabase)

Portal WWW do podglądu odczytów NFC z aplikacji "Wartownik" – realtime, bez plików.

## Dev
1) `cp .env.example .env.local` i uzupełnij:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_EVENTS_SSE_URL (jeśli własne API)

2) `npm i` i `npm run dev` → http://localhost:3000

## Deploy (Vercel)
- Utwórz projekt, dodaj zmienne środowiskowe, deploy.

## Uwaga
- Komponent `LiveFeed` oczekuje SSE JSON (jeden obiekt lub tablica). Dostosuj do swojego API.
