import { Text } from '@/components/ui/primitives/Text'
import React from 'react'

interface DataTableLoadingProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DataTableLoading: React.FC<DataTableLoadingProps> = (props) => {
  return (
    <div
      className={'flex flex-1 flex-col items-center justify-center gap-4'}
      {...props}
    >
      <Text>Carregando...</Text>
    </div>
  )
}
