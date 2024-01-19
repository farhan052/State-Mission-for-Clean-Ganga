'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Hero from './Components/hero'
import Clients from './Components/clients'

export default function Home() {
  const [count, setcount] = useState(0)
  return (<>
    <Hero/>
    <Clients/>
    <main className="flex min-h-screen flex-col items-center ">
  
   
      <Link href="/dashboard">Dashboard</Link>
      <div className='grid bg-slate-200 border-spacing-3'>
       <h3 className='my-3 h3 text-2xl mx-auto'>{count}</h3>
       <div className='flex gap-2'>
        <div className='mx-1 bg-red-400 p-2 font-bold'><button onClick={()=> setcount(count-1)} >- Decrement</button></div>
        <div><button className='bg-blue-100 p-2  font-bold' onClick={()=>setcount(count+1)}>+ Increment</button></div>
       </div>

      </div>
    </main>
  </>
  )
}
