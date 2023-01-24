import { getEmailAvatar } from 'helpers/getEmailAvatar'
import PostComment from 'interfaces/PostComment'
import { supabase } from './supabaseClient'

export const getComments = async (slug: string): Promise<PostComment[]> => {
  const { data, error } = await supabase
    .from('comments')
    .select()
    .eq('post_slug', slug)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  return data
}

interface CreateComment {
  message: string
  slug: string
}

export const createComment = async (createComment: CreateComment) => {
  const { data } = await supabase.auth.getSession()
  const user = data.session.user
  const comment = {
    post_slug: createComment.slug,
    message: createComment.message,
    username: user.user_metadata.name,
    avatar: getEmailAvatar(user.email)
  }
  const { error } = await supabase.from('comments').insert([comment])

  if (error) {
    throw new Error(error.message)
  }
}
