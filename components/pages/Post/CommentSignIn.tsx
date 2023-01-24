import { useRouter } from 'next/router'
import { signInWithGoogle } from 'services/googleAuth'

const CommentSignIn = () => {
  const router = useRouter()
  return (
    <div className="grid place-items-center h-40">
      <div>
        <p>To leave a comment</p>
        <button
          className="bg-black py-3 px-5 text-white rounded hover:opacity-70 active:translate-y-1 transition-all duration-200"
          onClick={() => signInWithGoogle(router.query.slug as string)}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default CommentSignIn
