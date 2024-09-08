import { useSession, signIn, signOut } from 'next-auth/react'
import Navbar from '../components/Navbar'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

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