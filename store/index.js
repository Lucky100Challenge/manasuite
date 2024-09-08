import create from 'zustand'

const useStore = create(set => ({
  goals: [],
  habits: [],
  todos: [],
  calendarEvents: [],
  affirmations: [],
  journalEntries: [],
  addGoal: (goal) => set(state => ({ goals: [...state.goals, goal] })),
  addHabit: (habit) => set(state => ({ habits: [...state.habits, habit] })),
  addToDo: (todo) => set(state => ({ todos: [...state.todos, todo] })),
  addEvent: (event) => set(state => ({ calendarEvents: [...state.calendarEvents, event] })),
  addAffirmation: (affirmation) => set(state => ({ affirmations: [...state.affirmations, affirmation] })),
  addJournalEntry: (entry) => set(state => ({ journalEntries: [...state.journalEntries, entry] })),
}))

export default useStore