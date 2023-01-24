import PostComment from 'interfaces/PostComment'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useQueryClient } from 'react-query'

interface PostCommentsProps {
  comments?: PostComment[]
}

const PostComments: FC<PostCommentsProps> = ({ comments = [] }) => {
  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <p className="text-xl mb-2">
        {comments.length} Comment{comments.length === 1 ? '' : 's'}
      </p>
      {comments.map(comment => (
        <div key={comment.id} className="py-5 border-b">
          <div className="flex items-center gap-2 mb-5">
            <img
              src={comment.avatar}
              alt="user avatar"
              className="rounded-full w-10 h-10"
            />
            <p>{comment.username}</p>
          </div>
          <p>{comment.message}</p>
        </div>
      ))}
    </div>
  )
}

export default PostComments
