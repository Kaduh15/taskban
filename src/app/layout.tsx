import type { Metadata } from 'next'
import { Libre_Franklin as LibreFranklin, K2D } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'

const libreFranklin = LibreFranklin({
  subsets: ['latin'],
  variable: '--font-sans',
})
const k2d = K2D({ subsets: ['latin'], variable: '--font-k2', weight: '700' })

export const metadata: Metadata = {
  title: 'Taskban',
  description: 'Taskban um simples kanban para gerenciar suas tarefas',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'min-h-screen min-w-full grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-indigo-200 font-sans antialiased text-gray-500',
          libreFranklin.variable,
          k2d.variable,
        )}
      >
        <SideMenu />
        <Header />
        {children}
      </body>
    </html>
  )
}
