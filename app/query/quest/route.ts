import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const req = await request.json()

  const { _k } = req
  const response = await fetch('https://cmty.space/api/query/quest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      _k,
    }),
  })

  const queryResponseJSON: any = await response.json()

  return NextResponse.json(queryResponseJSON)
}
