
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/style/globals.css'


import Example from '@/app/Component/Header'
import { FixedPlugin, Footer, Layout, Navbar } from './components'
// 
const inter = Roboto({
subsets :['latin'],
weight: ["300", "400", "500", "700", "900"],
  display: "swap",

   })

   export const metadata: Metadata = {
    title: "MFU Technology",
    description:
      " ",
      
  };
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
        {/* <script
          defer
          data-site="assigment"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
     
        <Navbar/>
          {children}
          <FixedPlugin />
          <Footer/>
       
      </body>
    </html>
  )
}
