'use client'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [count, setcount] = useState(0)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    
      <Link href="/dashboard">Dashboard</Link>
      <div className='grid'>
       <h3 className='my-3 h3 mx-auto'>{count}</h3>
       <div className='flex gap-2'>
        <div className='mx-1'><Button onClick={()=> setcount(count-1)} >- Decrement</Button></div>
        <div><Button onClick={()=>setcount(count+1)}>+ Increment</Button></div>
       </div>

      </div>
    </main>
  )
}
