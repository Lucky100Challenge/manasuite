import prisma from '../../prisma/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const affirmations = await prisma.affirmation.findMany()
    res.json(affirmations)
  } else if (req.method === 'POST') {
    const { text, userId } = req.body
    const affirmation = await prisma.affirmation.create({
      data: { text, userId },
    })
    res.json(affirmation)
  }
}