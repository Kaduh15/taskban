'use server'

import { redirect } from 'next/navigation'
import { FormCardSchemaType } from '..'

export const submit = async (data: FormCardSchemaType) => {
  await fetch(`${process.env.NEXT_URL}/api/task`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  redirect('/?newcard=0')
}
