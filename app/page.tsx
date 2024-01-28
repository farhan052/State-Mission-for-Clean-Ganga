'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Hero from './Component/hero'
import Clients from './Component/clients'
import { Footer, Navbar } from './components'
import Skills from './skills'
import Projects from './Component/projects'
import Resume from './resume'
import Testimonial from './testimonial'
import PopularClients from './popular-clients'
import ContactForm from './contact-form'

export default function Home() {
  const [count, setcount] = useState(0)
  return (<>
     <Navbar />
      <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <PopularClients />
      <ContactForm />
      <Footer />
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
