"use client";import {useState} from "react";import {supabase} from "@/lib/supabaseClient";import {useRouter} from "next/navigation";
export default function LoginPage(){const r=useRouter();const[email,setEmail]=useState("");const[password,setPassword]=useState("");const[loading,setLoading]=useState(false);const[msg,setMsg]=useState<string|null>(null);
async function login(e:React.FormEvent){e.preventDefault();if(!supabase)return setMsg("Supabase nie skonfigurowane.");setLoading(true);
const {error}=await supabase.auth.signInWithPassword({email,password});setLoading(false);if(error)return setMsg(error.message);r.push("/dashboard");}
return(<div className="max-w-md mx-auto card"><h1 className="text-xl font-semibold mb-4">Logowanie</h1><form className="grid gap-3" onSubmit={login}>
<label className="label">E-mail</label><input className="input" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
<label className="label">Hasło</label><input className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
<button className="btn" disabled={loading}>{loading?"Logowanie…":"Zaloguj"}</button>{msg&&<p className="text-sm text-rose-700">{msg}</p>}</form></div>);}
