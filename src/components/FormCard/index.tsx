'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().datetime(),
  priority: z.enum(['low', 'medium', 'high']),
})

type FormCardSchemaType = z.infer<typeof formCardSchema>

export default function FormCard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormCardSchemaType>({
    resolver: zodResolver(formCardSchema),
  })

  console.log('🚀 ~ file: index.tsx:20 ~ FormCard ~ watch:', watch())

  console.log('🚀 ~ file: index.tsx:21 ~ FormCard ~ errors:', errors)

  const onSubmit = (data: FormCardSchemaType) => console.log(data)

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
    </form>
  )
}
