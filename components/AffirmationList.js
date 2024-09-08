import useStore from '../store'

export default function AffirmationList() {
  const { affirmations, addAffirmation } = useStore()

  return (
    <div>
      <h2 className="text-2xl font-bold">Affirmations</h2>
      <ul>
        {affirmations.map(affirmation => (
          <li key={affirmation.id}>{affirmation.text}</li>
        ))}
      </ul>
      <button onClick={() => addAffirmation({ text: 'New Affirmation', userId: 1 })}>
        Add Affirmation
      </button>
    </div>
  )
}