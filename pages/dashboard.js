import { useSession } from 'next-auth/client'
import Navbar from '../components/Navbar'
import GoalList from '../components/GoalList'
import HabitList from '../components/HabitList'
import ToDoList from '../components/ToDoList'
import Calendar from '../components/Calendar'
import AffirmationList from '../components/AffirmationList'
import Journal from '../components/Journal'

export default function Dashboard() {
  const [session] = useSession()

  if (!session) {
    return <p>Access Denied</p>
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <GoalList />
        <HabitList />
        <ToDoList />
        <Calendar />
        <AffirmationList />
        <Journal />
      </div>
    </div>
  )
}