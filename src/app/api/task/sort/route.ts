import { database } from '@/database'

export async function GET() {
  const tasksSortByStatus = database.getTaskSortedByStatus()

  return Response.json(tasksSortByStatus)
}
