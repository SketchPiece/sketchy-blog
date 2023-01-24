import { supabase } from './supabaseClient'

export const signInWithGoogle = async (redirectSlug?: string) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo:
        window.location.origin + (redirectSlug ? `/posts/${redirectSlug}` : '')
    }
  })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new Error(error.message)
  }
}
