import { JSONPreset } from 'lowdb/node'

export type Status = 'To do' | 'Doing' | 'QA' | 'Done'

export type Task = {
  id: string
  title: string
  description: string
  status: Status
  dateFinished: string
  priority: 'low' | 'medium' | 'high'
}

async function initialDB() {
  const db = JSONPreset<Task[]>('db.json', [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: 'To do',
      dateFinished: '2021-09-01',
      priority: 'low',
    },
    {
      id: '2',
      title: 'Task 2',
      description: 'Description 2',
      status: 'Doing',
      dateFinished: '2021-09-02',
      priority: 'medium',
    },
    {
      id: '3',
      title: 'Task 3',
      description: 'Description 3',
      status: 'QA',
      dateFinished: '2021-09-03',
      priority: 'high',
    },
    {
      id: '4',
      title: 'Task 4',
      description: 'Description 4',
      status: 'Done',
      dateFinished: '2021-09-04',
      priority: 'low',
    },
  ])

  ;(await db).write()

  return await db
}

export const db = initialDB()
