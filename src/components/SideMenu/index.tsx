import {
  LayoutDashboard,
  LayoutList,
  GanttChartSquare,
  CalendarDays,
} from 'lucide-react'

export default function SideMenu() {
  return (
    <div className="bg-white h-full flex flex-col gap-20 py-14 px-14 row-span-2 max-w-[40%] min-w-fit justify-start items-center">
      <h2 className="font-k2 text-indigo-700 font-bold text-4xl">Taskban</h2>
      <menu className="grid gap-5 text-gray-500 text-lg">
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
