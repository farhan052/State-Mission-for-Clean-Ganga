
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import Example from '@/Components/Header'
// 
const inter = Inter({ subsets: ['latin'] })

 export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
          <div><Example/></div>
        <div>
        {children}
        </div>
      
        </body>
    </html>
  )
}
