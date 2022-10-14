import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://digjpahhithplegldcux.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZ2pwYWhoaXRocGxlZ2xkY3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUxNzYxNjcsImV4cCI6MTk4MDc1MjE2N30.6OeVLE0cj_EaC1N_Rcr1iJlLet_IpqHbQ2cFm_RsZDY'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase