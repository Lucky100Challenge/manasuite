import useStore from '../store'

export default function HabitList() {
  const { habits, addHabit } = useStore()

  return (
    <div>
      <h2 className="text-2xl font-bold">Habits</h2>
      <ul>
        {habits.map(habit => (
          <li key={habit.id}>{habit.title}</li>
        ))}
      </ul>
      <button onClick={() => addHabit({ title: 'New Habit', frequency: 'daily', userId: 1 })}>
        Add Habit
      </button>
    </div>
  )
}