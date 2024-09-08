import Link from 'next/link'
import { useSession, signOut } from 'next-auth/client'

export default function Navbar() {
  const [session] = useSession()

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-lg font-bold">ManaSuite</a>
        </Link>
        <div>
          {session ? (
            <>
              <Link href="/dashboard">
                <a className="text-white mr-4">Dashboard</a>
              </Link>
              <button onClick={() => signOut()} className="text-white">Sign out</button>
            </>
          ) : (
            <button onClick={() => signIn()} className="text-white">Sign in</button>
          )}
        </div>
      </div>
    </nav>
  )
}