import useStore from '../store'

export default function ToDoList() {
  const { todos, addToDo } = useStore()

  return (
    <div>
      <h2 className="text-2xl font-bold">To-Do Lists</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={() => addToDo({ title: 'New To-Do', userId: 1 })}>
        Add To-Do
      </button>
    </div>
  )
}