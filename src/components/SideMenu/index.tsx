import {
  LayoutDashboard,
  LayoutList,
  GanttChartSquare,
  CalendarDays,
} from 'lucide-react'

export default function SideMenu() {
  return (
    <div className="row-span-2 flex h-full min-w-fit max-w-[40%] flex-col items-center justify-start bg-white px-14 py-14">
      <menu className="grid gap-5 text-lg text-gray-500">
        <h2 className="mb-20 font-k2 text-4xl font-bold text-indigo-700">
          Taskban
        </h2>
        <li className="flex gap-5 text-indigo-700">
          <LayoutDashboard /> Quadro
        </li>
        <li className="flex gap-5">
          <LayoutList /> Lista
        </li>
        <li className="flex gap-5">
          <GanttChartSquare />
          Timeline
        </li>
        <li className="flex gap-5">
          <CalendarDays /> Calendário
        </li>
      </menu>
    </div>
  )
}
