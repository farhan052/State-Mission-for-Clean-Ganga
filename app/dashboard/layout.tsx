import { Metadata } from "next/dist/lib/metadata/types/metadata-interface"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function DashboardLayout({
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
 