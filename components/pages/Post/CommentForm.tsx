import { useAuth } from 'hooks/useAuth'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { getEmailAvatar } from 'helpers/getEmailAvatar'

interface FormValues {
  message: string
}

interface CommentFormProps {
  onComment?: (message: string) => void
}

const CommentForm: FC<CommentFormProps> = ({ onComment }) => {
  const user = useAuth()
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const handleComment = (values: FormValues) => {
    onComment(values.message)
    reset()
  }
  const avatarUrl = getEmailAvatar(user?.email)

  const username = user?.user_metadata?.name || user?.email || 'Anonymous'

  return (
    <div className="max-w-3xl m-auto">
      <div className="flex items-center gap-2 mt-10 mb-5">
        <img
          src={avatarUrl}
          alt="user avatar"
          className="rounded-full w-10 h-10"
        />
        <p>{username}</p>
      </div>
      <form
        id="comments"
        onSubmit={handleSubmit(handleComment)}
        className="flex flex-col gap-4"
      >
        <textarea
          placeholder="Type your comment here..."
          className="outline-none h-40"
          {...register('message')}
        />
        <button
          type="submit"
          className="text-white bg-black rounded py-2 hover:opacity-70 active:translate-y-1 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CommentForm
