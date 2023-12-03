import Link from 'next/link'

export default function Header() {
  return (
    <header className="row-start-1g col-start-2 flex h-fit items-center justify-end bg-indigo-700 px-3 py-3">
      <Link
        href="/?newcard=1"
        className="rounded bg-indigo-300 px-4 py-2 text-white"
      >
        + Novo Card
      </Link>
    </header>
  )
}
