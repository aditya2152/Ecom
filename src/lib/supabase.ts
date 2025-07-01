import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://lidcmulggrlbgeysbswf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZGNtdWxnZ3JsYmdleXNic3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzOTMzNjMsImV4cCI6MjA2Njk2OTM2M30.Kmc1AGDwjOgYE3lc7wyLGMTlu7GVcBPCxYAl31eEIaM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);