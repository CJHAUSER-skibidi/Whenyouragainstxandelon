// supabase.js
const SUPABASE_URL = 'https://nrkddggevbxqdpckduxs.supabase.co'; // 👈 Replace this
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ya2RkZ2dldmJ4cWRwY2tkdXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3OTg4MjQsImV4cCI6MjA2MjM3NDgyNH0.kVzzE-uWr3ovSMyIHUNElVPvO12j2f2ZRrG7GhkxjkE';               // 👈 Replace this too

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
