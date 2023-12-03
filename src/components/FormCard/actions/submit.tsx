'use server'

import { db } from '@/database/inital-db'
import { randomUUID } from 'crypto'
import { FormCardSchemaType } from '..'

export const submit = async (data: FormCardSchemaType) => {
  'use server'

  const id = (await db).data.push({
    id: randomUUID(),
    title: data.title,
    description: data.description,
    dateFinished: data.date,
    status: data.status,
    priority: data.priority,
  })
  console.log('🚀 ~ file: index.tsx:44 ~ hadlerClick ~ id:', id)

  await (await db).write()
}
