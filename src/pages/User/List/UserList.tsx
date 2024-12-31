import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DataTable } from '@/components/ui/composite/DataTable'
import { InputSearch } from '@/components/ui/composite/InputSearch'
import { Button } from '@/components/ui/primitives/Button'
import { Title } from '@/components/ui/primitives/Title'
import { useUserList } from '@/pages/User/List/useUserList'
import { userListService } from '@/services/user/user-list.service'
import { PlusIcon } from '@heroicons/react/16/solid'

export const UserList = () => {
  const { columns, actions, filters, handleDebouncedFilter } = useUserList()

  return (
    <MainLayout>
      <div
        className={'flex flex-col justify-between gap-4 md:flex-row md:gap-0'}
      >
        <div className={'flex justify-between'}>
          <Title subtitle={'Listar'}>
            Usuários
          </Title>
          <Button href={'criar'} className={'md:hidden'}>
            Criar
            <PlusIcon />
          </Button>
        </div>
        <div className={'flex flex-col gap-2 md:flex-row'}>
          <InputSearch name={'query'} onChange={handleDebouncedFilter} />
          <Button href={'criar'} className={'hidden md:flex'}>
            Criar
            <PlusIcon />
          </Button>
        </div>
      </div>
      <Content>
        <DataTable
          service={userListService}
          columns={columns}
          actions={actions}
          filters={filters}
        />
      </Content>
    </MainLayout>
  )
}
