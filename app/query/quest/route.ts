import { NextResponse } from 'next/server'

export const runtime = 'edge'

const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
  'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: responseHeaders })
}

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

  return NextResponse.json(queryResponseJSON, { headers: responseHeaders })
}
