import Link from 'next/link'
import FormCard from '../FormCard'

export default function PopUpNewCard() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="flex flex-col gap-8 rounded-lg bg-white  p-11 shadow-lg">
        <h1 className="text-2xl font-semibold text-indigo-800">Novo Card</h1>
        <FormCard />
        <div className="flex w-full gap-4 self-end">
          <Link
            href="/"
            className="flex h-9 w-44 items-center justify-center rounded-full border-2 border-red-400 bg-white font-semibold uppercase text-red-400"
          >
            Cancelar
          </Link>
          <button className="h-9 w-44 rounded-full bg-indigo-700 font-semibold uppercase text-white">
            Criar
          </button>
        </div>
      </div>
    </div>
  )
}
