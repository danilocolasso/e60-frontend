import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Text } from '@/components/ui/primitives/Text'
import React from 'react'

export const Customer: React.FC = () => {
  return (
    <MainLayout>
      <div className={'flex flex-1 flex-col items-center justify-center gap-4'}>
        <Text>Customer page</Text>
      </div>
    </MainLayout>
  )
}
