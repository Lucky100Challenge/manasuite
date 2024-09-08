import useStore from '../store'

export default function GoalList() {
  const { goals, addGoal } = useStore()

  return (
    <div>
      <h2 className="text-2xl font-bold">Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.title}</li>
        ))}
      </ul>
      <button onClick={() => addGoal({ title: 'New Goal', isLongTerm: false, userId: 1 })}>
        Add Goal
      </button>
    </div>
  )
}