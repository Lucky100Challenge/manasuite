import prisma from '../../prisma/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const entries = await prisma.journalEntry.findMany()
    res.json(entries)
  } else if (req.method === 'POST') {
    const { content, userId } = req.body
    const entry = await prisma.journalEntry.create({
      data: { content, userId },
    })
    res.json(entry)
  }
}