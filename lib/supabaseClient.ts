import { createClient } from "@supabase/supabase-js";
export const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const supabaseAnon=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase=(supabaseUrl&&supabaseAnon)?createClient(supabaseUrl,supabaseAnon):null;
