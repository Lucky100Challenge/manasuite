import prisma from '../../prisma/client'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const events = await prisma.calendarEvent.findMany()
    res.json(events)
  } else if (req.method === 'POST') {
    const { title, date, reminder, userId } = req.body
    const event = await prisma.calendarEvent.create({
      data: { title, date, reminder, userId },
    })
    res.json(event)
  }
}