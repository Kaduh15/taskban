'use server'

import { redirect } from 'next/navigation'
import { FormCardSchemaType } from '..'

export const submit = async (data: FormCardSchemaType) => {
  'use server'

  await fetch('http:localhost:3000/api/task', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  redirect('/')
}
