import Link from 'next/link'

export default function Header() {
  return (
    <header className="col-start-2 row-start-1g bg-indigo-700 flex items-center justify-end px-3 py-3 h-fit">
      <Link
        href="/?newcard=1"
        className="bg-indigo-300 px-4 py-2 rounded text-white"
      >
        + Novo Card
      </Link>
    </header>
  )
}
