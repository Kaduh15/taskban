import { Task } from '@/database/inital-db'

export default function CardTask(task: Task) {
  return (
    <div>
      <div
        key={task.id}
        className="flex w-full max-w-[300px] flex-col gap-4 rounded-md bg-white p-4 shadow-md"
      >
        <div>{task.status}</div>
        <h1 className="text-xl font-semibold text-indigo-700">{task.title}</h1>
        <p className="text-sm text-gray-500">{task.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{task.dateFinished}</span>
          <span className="text-sm text-gray-500">{task.priority}</span>
        </div>
      </div>
    </div>
  )
}
