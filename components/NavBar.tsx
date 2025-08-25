"use client";
import Link from "next/link";import {useEffect,useState} from "react";import {supabase} from "@/lib/supabaseClient";
export default function NavBar(){const[email,setEmail]=useState<string|null>(null);
useEffect(()=>{if(!supabase)return;supabase.auth.getUser().then(r=>setEmail(r.data.user?.email??null));
const{data:sub}=supabase.auth.onAuthStateChange((_e,s)=>setEmail(s?.user?.email??null));return()=>{sub?.subscription.unsubscribe();};},[]);
return(<nav className="border-b border-slate-200 bg-white"><div className="container py-3 flex items-center justify-between">
<Link href="/" className="font-semibold text-rose-700">Wartownik Portal</Link>
<div className="flex items-center gap-4"><Link href="/dashboard" className="text-sm text-slate-700 hover:text-slate-900">Dashboard</Link>
{email?(<button className="text-sm text-slate-600 hover:text-slate-900" onClick={()=>supabase?.auth.signOut()}>Wyloguj ({email})</button>):(<Link href="/login" className="text-sm text-rose-700">Zaloguj</Link>)}</div>
</div></nav>);}
