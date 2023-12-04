import { Task } from '@/types/Task'

export default function CardTask(task: Task) {
  return (
    <div
      key={task.id}
      draggable
      className="flex h-20 w-44 flex-col gap-4 rounded-md bg-white p-4 shadow-md"
    >
      <h1 className="text-xl font-semibold text-indigo-700">{task.title}</h1>
      <p className="text-sm text-gray-500">{task.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{task.date}</span>
        <span className="text-sm text-gray-500">{task.priority}</span>
      </div>
    </div>
  )
}
