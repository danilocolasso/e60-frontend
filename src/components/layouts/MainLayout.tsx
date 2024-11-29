import { Content } from '@/components/common/Content/Content.tsx'
import { Navbar } from '@/components/common/Navbar'
import { Sidebar } from '@/components/common/Sidebar'
import { SidebarProvider } from '@/contexts/SidebarContext.tsx'
import { navigation, userNavigation } from '@/data/navigationData.ts'
import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Sidebar navigation={navigation} />
        <div className="flex flex-col flex-1 lg:pl-72">
          <Navbar navigation={userNavigation} />
          <Content>{children}</Content>
        </div>
      </SidebarProvider>
    </>
)
}
