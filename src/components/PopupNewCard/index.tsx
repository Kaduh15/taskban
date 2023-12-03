import Link from 'next/link'
import FormCard from '../FormCard'

export default function PopUpNewCard() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="flex flex-col gap-8 bg-white rounded-lg shadow-lg p-11">
        <h1 className="text-indigo-800 font-semibold text-2xl">Novo Card</h1>
        <FormCard />
        <div className="flex gap-4 self-end w-full">
          <Link
            href="/"
            className="flex items-center justify-center bg-white border-red-400 border-2 rounded-full uppercase text-red-400 font-semibold w-44 h-9"
          >
            Cancelar
          </Link>
          <button className="bg-indigo-700 rounded-full uppercase text-white font-semibold w-44 h-9">
            Criar
          </button>
        </div>
      </div>
    </div>
  )
}
