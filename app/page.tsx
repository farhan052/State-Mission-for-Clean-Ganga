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
      <div className='grid bg-slate-200 border-spacing-3'>
       <h3 className='my-3 h3 bg-white mx-auto'>{count}</h3>
       <div className='flex gap-2'>
        <div className='mx-1 bg-red-400 font-bold'><Button onClick={()=> setcount(count-1)} >- Decrement</Button></div>
        <div><Button className='bg-blue-100 font-bold' onClick={()=>setcount(count+1)}>+ Increment</Button></div>
       </div>

      </div>
    </main>
  )
}
