import { database } from '@/database'

export async function GET() {
  const tasks = database.getTasks()
  console.log('🚀 ~ file: route.ts:5 ~ GET ~ tasks:', tasks)
  return Response.json({ tasks })
}

export async function POST(request: Request) {
  const data = await request.json()
  console.log('🚀 ~ file: route.ts:14 ~ POST ~ data:', data)

  const task = database.createTask({
    description: data.description,
    date: data.date,
    priority: data.priority,
    title: data.title,
  })

  return Response.json(task)
}
