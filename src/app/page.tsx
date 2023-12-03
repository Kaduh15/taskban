import PopUpNewCard from '@/components/PopupNewCard'

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { newcard } = searchParams

  return (
    <>
      {Boolean(newcard) && <PopUpNewCard />}
      <main className="col-start-2 row-start-2 flex w-full flex-col items-center justify-between">
        <h1>Hello World!!</h1>
      </main>
    </>
  )
}
