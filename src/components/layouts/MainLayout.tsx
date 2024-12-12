import { Sidebar } from '@/components/common/Sidebar'
import { SidebarUser } from '@/components/common/SidebarUser'
import { Navbar, NavbarSection, NavbarSpacer } from '@/components/ui/Navbar'
import { SidebarLayout } from '@/components/ui/SidebarLayout'
import React from 'react'

interface FooLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout = ({ children, ...props }: FooLayoutProps) => {
  return (
    <SidebarLayout
      {...props}
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <SidebarUser />
          </NavbarSection>
        </Navbar>
      }
      sidebar={<Sidebar />}
    >
      <div className={'flex flex-1 flex-col'}>{children}</div>
    </SidebarLayout>
  )
}
