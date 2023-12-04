import CardTask from '@/components/CardTask'
import PopUpNewCard from '@/components/PopupNewCard'
import { StatusTask, Task } from '@/types/Task'

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { newcard } = searchParams

  const response = await fetch('http://localhost:3000/api/task/sort', {
    cache: 'no-cache',
  })

  const data = (await response.json()) as { [key in StatusTask]: Task[] }

  return (
    <>
      {Boolean(newcard) && <PopUpNewCard />}
      <main className="col-start-2 row-start-2 flex w-full items-start justify-center gap-20 p-20">
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
      </main>
    </>
  )
}
