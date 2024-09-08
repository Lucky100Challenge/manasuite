import prisma from '../../prisma/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const habits = await prisma.habit.findMany()
    res.json(habits)
  } else if (req.method === 'POST') {
    const { title, frequency, userId } = req.body
    const habit = await prisma.habit.create({
      data: { title, frequency, userId, streak: 0 },
    })
    res.json(habit)
  }
}