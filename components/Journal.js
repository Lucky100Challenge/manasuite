import useStore from '../store'

export default function Journal() {
  const { journalEntries, addJournalEntry } = useStore()

  return (
    <div>
      <h2 className="text-2xl font-bold">Journal</h2>
      <ul>
        {journalEntries.map(entry => (
          <li key={entry.id}>{entry.content}</li>
        ))}
      </ul>
      <button onClick={() => addJournalEntry({ content: 'New Journal Entry', userId: 1 })}>
        Add Journal Entry
      </button>
    </div>
  )
}