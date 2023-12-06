'use client'

import { useQuery } from 'react-query'
import CardTask from '../CardTask'
import { TasksSortByStatus } from '@/types/Task'
import { getSortedTasks } from '@/utils/api/task'

export default function CardFrame() {
  const { data } = useQuery<TasksSortByStatus>('tasks', {
    queryFn: getSortedTasks,
    initialData: {
      'To do': [],
      Doing: [],
      Done: [],
      QA: [],
    },
    refetchInterval: 1000,
  })

  if (!data) return null

  return (
    <>
      {Object.entries(data).map(([key, list]) => (
        <div
          key={key}
          className="flex flex-col items-center gap-4 rounded-xl bg-orange-300 p-4"
        >
          <h2 className="self-start">
            {key} {`(${list.length})`}
          </h2>
          {list.map((task) => (
            <CardTask key={task.id} {...task} />
          ))}
        </div>
      ))}
    </>
  )
}
