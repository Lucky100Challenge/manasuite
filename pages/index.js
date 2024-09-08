import { useSession, signIn, signOut } from 'next-auth/client'
import Navbar from '../components/Navbar'

export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="text-4xl font-bold">Welcome to ManaSuite</h1>
      {!session && (
        <>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  )
}