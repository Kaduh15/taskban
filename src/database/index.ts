import { StatusTask, Task, TasksSortByStatus } from '@/types/Task'
import { randomUUID } from 'crypto'

export default class DatabaseInMemory {
  private tasks: Task[] = [
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '1',
      priority: 'low',
      status: 'QA',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '2',
      priority: 'low',
      status: 'Done',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '3',
      priority: 'low',
      status: 'Doing',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '4',
      priority: 'low',
      status: 'QA',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '5',
      priority: 'low',
      status: 'Done',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '6',
      priority: 'low',
      status: 'Doing',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '7',
      priority: 'low',
      status: 'QA',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '8',
      priority: 'low',
      status: 'To do',
      title: 'Teste',
    },
    {
      date: '2021-10-10',
      description: 'Teste',
      id: '9',
      priority: 'low',
      status: 'To do',
      title: 'Teste',
    },
  ]

  getTasks(): Task[] {
    return this.tasks
  }

  getTaskSortedByStatus(): TasksSortByStatus {
    const tasksByStatus: TasksSortByStatus = {
      'To do': [],
      Done: [],
      Doing: [],
      QA: [],
    }

    this.tasks.forEach((task) => {
      tasksByStatus[task.status].push(task)
    })

    return tasksByStatus
  }

  createTask(task: Omit<Task, 'id' | 'status'>): Task {
    const newTask: Task = {
      ...task,
      id: randomUUID(),
      status: 'To do',
    }

    this.tasks.push(newTask)
    return newTask
  }

  updateTask(task: Task): Task {
    const index = this.tasks.findIndex((t) => t.id === task.id)
    this.tasks[index] = task
    return task
  }

  updateStatusTask(id: string, status: StatusTask): Task {
    const index = this.tasks.findIndex((t) => t.id === id)
    this.tasks[index].status = status
    return this.tasks[index]
  }
}

export const database = new DatabaseInMemory()
