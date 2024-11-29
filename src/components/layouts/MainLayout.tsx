import { Content } from '@/components/common/Content/Content.tsx'
import { Navbar } from '@/components/common/Navbar'
import { Sidebar } from '@/components/common/Sidebar'
import { SidebarProvider } from '@/contexts/SidebarContext.tsx'
import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <div className="flex flex-1 flex-col lg:pl-72">
          <Navbar />
          <Content>{children}</Content>
        </div>
      </SidebarProvider>
    </>
  )
}
