import { NextRequest } from 'next/server'
import cors from '../../lib/cors'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  return new Response('Hello World!'), {
      headers: { 'Content-Type': 'text/html' },
    })
  )
}
