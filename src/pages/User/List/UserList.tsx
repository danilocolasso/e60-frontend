import { MainLayout } from '@/components/layouts/MainLayout'
import { DataTable } from '@/components/ui/composite/DataTable'
import { InputSearch } from '@/components/ui/composite/InputSearch'
import { Button } from '@/components/ui/primitives/Button'
import { Divider } from '@/components/ui/primitives/Divider'
import { Title } from '@/components/ui/primitives/Title'
import { useUserList } from '@/pages/User/List/useUserList'
import { userListService } from '@/services/user/user-list.service'
import { PlusIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface Filters {
  query?: string
}

export const UserList = () => {
  const { columns, actions } = useUserList()
  const [filters, setFilters] = useState<Filters>({ query: '' })

  const debounced = useDebouncedCallback((value) => {
    setFilters({ ...filters, query: value })
  }, 500)

  return (
    <MainLayout>
      <div
        className={'flex flex-col justify-between gap-4 md:flex-row md:gap-0'}
      >
        <div className={'flex justify-between'}>
          <Title divider={false} subtitle={'Listar'}>
            Usuários
          </Title>
          <Button href={'criar'} className={'md:hidden'}>
            Criar
            <PlusIcon />
          </Button>
        </div>
        <div className={'flex flex-col gap-2 md:flex-row'}>
          <InputSearch onChange={(e) => debounced(e.target.value)} />
          <Button href={'criar'} className={'hidden md:flex'}>
            Criar
            <PlusIcon />
          </Button>
        </div>
      </div>
      <Divider />
      <DataTable
        service={userListService}
        columns={columns}
        actions={actions}
        filters={filters}
      />
    </MainLayout>
  )
}
