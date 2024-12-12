import { Sidebar } from '@/components/common/Sidebar'
import { SidebarUser } from '@/components/common/SidebarUser'
import { Navbar, NavbarSection, NavbarSpacer } from '@/components/ui/primitives/Navbar'
import { SidebarLayout } from '@/components/ui/primitives/SidebarLayout'
import React from 'react'

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayout = ({ children, ...props }: MainLayoutProps) => {
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
      <div className={'flex flex-1 flex-col gap-4'}>{children}</div>
    </SidebarLayout>
  )
}
