import prisma from '../../prisma/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const todos = await prisma.toDo.findMany()
    res.json(todos)
  } else if (req.method === 'POST') {
    const { title, dueDate, priority, userId } = req.body
    const todo = await prisma.toDo.create({
      data: { title, dueDate, priority, userId, completed: false },
    })
    res.json(todo)
  }
}