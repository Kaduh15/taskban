'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { submit } from './actions/submit'

const formCardSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  date: z.string().transform((date) => {
    console.log('🚀 ~ file: index.tsx:18 ~ .transform ~ date:', date)

    return new Date(date).toISOString()
  }),
  status: z.enum(['To do', 'Doing', 'QA', 'Done']).default('To do'),
  priority: z.enum(['low', 'medium', 'high']),
})

export type FormCardSchemaType = z.infer<typeof formCardSchema>

export default function FormCard() {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<FormCardSchemaType>({
    resolver: zodResolver(formCardSchema),
  })

  const onSubmit = async (data: FormCardSchemaType) => {
    console.log(data)
    await submit(data)

    window.location.href = '/'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="relative">
        <label
          htmlFor="title"
          className="absolute -top-1.5 left-3 bg-white px-2 text-xs"
        >
          Titulo da Task
        </label>
        <input
          className="w-full rounded-md border-2 border-gray-300 p-2 placeholder:text-base focus:outline-none"
          type="text"
          id="title"
          placeholder="Digite o Titulo da Task"
          {...register('title')}
        />
      </div>
      <div className="relative">
        <label
          htmlFor="description"
          className="absolute -top-1.5 left-3 bg-white px-2 text-xs"
        >
          Descrição da Task
        </label>
        <textarea
          className="w-full rounded-md border-2 border-gray-300 p-2 placeholder:text-base focus:outline-none"
          id="description"
          placeholder="Digite a Descrição"
          {...register('description')}
        />
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="relative">
          <label
            htmlFor="date"
            className="absolute -top-1.5 left-3 bg-white px-2 text-xs"
          >
            Data Final
          </label>
          <input
            className="w-full rounded-md border-2 border-gray-300 p-2 focus:outline-none"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xs">Priority</h2>
          <div className="flex gap-4">
            <label
              htmlFor="high"
              className="rounded-full border-2 border-orange-600 px-4 py-1 text-orange-600 data-[priority=high]:bg-orange-600 data-[priority=high]:text-white"
              data-priority={watch('priority')}
            >
              HIGH
            </label>
            <input
              type="radio"
              className="hidden"
              value="high"
              {...register('priority')}
              id="high"
            />
            <label
              htmlFor="medium"
              className="rounded-full border-2 border-yellow-400 px-4 py-1 text-yellow-400 data-[priority=medium]:bg-yellow-400 data-[priority=medium]:text-white"
              data-priority={watch('priority')}
            >
              MEDIUM
            </label>
            <input
              type="radio"
              className="hidden"
              value="medium"
              {...register('priority')}
              id="medium"
            />
            <label
              htmlFor="low"
              className="rounded-full border-2 border-green-600 px-4 py-1 text-green-600 data-[priority=low]:bg-green-600 data-[priority=low]:text-white"
              data-priority={watch('priority')}
            >
              LOW
            </label>
            <input
              type="radio"
              className="hidden"
              value="low"
              {...register('priority')}
              id="low"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4 self-end">
        <Link
          href="/"
          className="flex h-9 w-44 items-center justify-center rounded-full border-2 border-red-400 bg-white font-semibold uppercase text-red-400"
        >
          Cancelar
        </Link>
        <button
          className="h-9 w-44 rounded-full bg-indigo-700 font-semibold uppercase text-white"
          type="submit"
        >
          Criar
        </button>
      </div>
    </form>
  )
}
