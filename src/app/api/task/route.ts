import { database } from '@/database'

export async function GET() {
  const tasks = database.getTasks()

  return Response.json({ tasks })
}

export async function POST(request: Request) {
  const data = await request.json()

  const task = database.createTask({
    description: data.description,
    date: data.date,
    priority: data.priority,
    title: data.title,
  })

  return Response.json(task)
}
