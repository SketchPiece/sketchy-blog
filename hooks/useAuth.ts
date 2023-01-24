import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from 'services/supabaseClient'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)

  const checkSession = async () => {
    const {
      data: { session }
    } = await supabase.auth.getSession()
    setUser(session?.user ?? null)
  }

  useEffect(() => {
    checkSession()
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user)
    })
    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  return user
}
