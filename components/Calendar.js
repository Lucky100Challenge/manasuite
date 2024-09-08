import useStore from '../store'

export default function Calendar() {
  const { calendarEvents, addEvent } = useStore()

  return (
    <div>
      <h2 className="text-2xl font-bold">Calendar</h2>
      <ul>
        {calendarEvents.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
      <button onClick={() => addEvent({ title: 'New Event', date: new Date(), userId: 1 })}>
        Add Event
      </button>
    </div>
  )
}