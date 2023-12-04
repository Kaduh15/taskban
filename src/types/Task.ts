import { randomUUID } from 'crypto'

export type StatusTask = 'To do' | 'Doing' | 'QA' | 'Done'

export type PriorityTask = 'low' | 'medium' | 'high'

export type Task = {
  id: string | ReturnType<typeof randomUUID>
  title: string
  description: string
  status: StatusTask
  date: string
  priority: PriorityTask
}

export type TasksSortByStatus = {
  [key in StatusTask]: Task[]
}
