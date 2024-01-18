import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact',
}

export default function ContactLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        
        
      
        <div>
  
        {children}
        </div>
      </section>
    )
  }
 