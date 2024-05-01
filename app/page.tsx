'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Hero from './Component/hero'
import Clients from './Component/clients'
import { Footer, Navbar } from './components'
import Skills from './Component/skills'
import Projects from './Component/projects'
import Resume from './resume'
import Testimonial from './testimonial'
import PopularClients from './popular-clients'
import ContactForm from './contact-form'

export default function Home() {
  // const [count, setcount] = useState(0)
  return (<>
    
      <Hero />
      <Skills />
      {/* <Clients /> */}
      {/* <Projects /> */}
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}

  </>
  )
}
