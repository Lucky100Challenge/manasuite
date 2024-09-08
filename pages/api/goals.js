import prisma from '../../prisma/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const goals = await prisma.goal.findMany()
    res.json(goals)
  } else if (req.method === 'POST') {
    const { title, isLongTerm, userId } = req.body
    const goal = await prisma.goal.create({
      data: { title, isLongTerm, userId, progress: 0 },
    })
    res.json(goal)
  }
}