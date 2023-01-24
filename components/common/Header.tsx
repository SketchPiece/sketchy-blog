import { useAuth } from 'hooks/useAuth'
import Link from 'next/link'
import { signOut } from 'services/googleAuth'

const Header = () => {
  const user = useAuth()
  return (
    <header className="mb-20 mt-8 flex justify-between items-center">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline font-cabin-sketch">
          SketchyBlog.
        </Link>
      </h2>
      {user && (
        <button className="font-bold hover:underline" onClick={signOut}>
          Sign Out
        </button>
      )}
    </header>
  )
}

export default Header
