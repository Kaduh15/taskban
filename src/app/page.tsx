import CardFrame from '@/components/CardFrame'
import PopUpNewCard from '@/components/PopupNewCard'

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { newcard } = searchParams
  console.log('🚀 ~ file: page.tsx:10 ~ newcard:', Boolean(Number(newcard)))

  return (
    <>
      {Boolean(Number(newcard)) && <PopUpNewCard />}
      <main className="col-start-2 row-start-2 flex w-full items-start justify-center gap-20 p-20">
        <CardFrame />
      </main>
    </>
  )
}
