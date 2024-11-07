import { createClient } from '@/utils/supabase/client'

// Create a single supabase client for interacting with your database

export default async function TestPage() {
    const supabase = createClient();
    const { data: profiles, error } = await supabase.from('profiles').select();
    
    if (error) {
      console.error("Supabase error:", error);
    }
  
    return (
      <div>
        <h1>Profiles Data</h1>
        <pre>{JSON.stringify(profiles, null, 2)}</pre>
      </div>
    );
  }