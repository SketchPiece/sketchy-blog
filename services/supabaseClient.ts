import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://dqsxygmbxhbxidmexscv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxc3h5Z21ieGhieGlkbWV4c2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ0MzIzNDIsImV4cCI6MTk5MDAwODM0Mn0.pB-20FM7OVYABo8QS5fo06gVlqiHfug3uEYgY3PtxZQ'
)
