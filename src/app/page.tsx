import CardTask from '@/components/CardTask'
import PopUpNewCard from '@/components/PopupNewCard'
import { Status, Task, db } from '@/database/inital-db'

type FilterTask = {
  [key in Status]: Task[]
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { newcard } = searchParams

  const data = (await db).data

  const {
    'To do': todo,
    Doing: doing,
    QA: qa,
    Done: done,
  } = data.reduce<FilterTask>(
    (acc, task) => {
      acc[task.status].push(task)

      return acc
    },
    { 'To do': [], Doing: [], QA: [], Done: [] },
  )

  return (
    <>
      {Boolean(newcard) && <PopUpNewCard />}
      <main className="justify-cernter col-start-2 row-start-2 flex w-full items-center justify-center gap-5">
        <div>
          {todo.map((task) => (
            <CardTask key={task.id} {...task} />
          ))}
        </div>
        <div>
          {doing.map((task) => (
            <CardTask key={task.id} {...task} />
          ))}
        </div>
        <div>
          {qa.map((task) => (
            <CardTask key={task.id} {...task} />
          ))}
        </div>
        <div>
          {done.map((task) => (
            <CardTask key={task.id} {...task} />
          ))}
        </div>
      </main>
    </>
  )
}
