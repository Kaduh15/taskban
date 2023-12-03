import FormCard from '../FormCard'

export default function PopUpNewCard() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
      <div className="flex flex-col gap-8 rounded-lg bg-white  p-11 shadow-lg">
        <h1 className="text-2xl font-semibold text-indigo-800">Novo Card</h1>
        <FormCard />
      </div>
    </div>
  )
}
