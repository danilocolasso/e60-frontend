import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DataTable } from '@/components/ui/composite/DataTable'
import { InputSearch } from '@/components/ui/composite/InputSearch'
import { Button } from '@/components/ui/primitives/Button'
import { Title } from '@/components/ui/primitives/Title'
import { useRoomList } from '@/pages/room/list/useRoomList'
import { roomListService } from '@/services/room/room-list.service'
import { PlusIcon } from '@heroicons/react/16/solid'

export const RoomList = () => {
  const { columns, actions, filters, handleDebouncedFilter } = useRoomList()

  return (
    <MainLayout>
      <div
        className={'flex flex-col justify-between gap-4 md:flex-row md:gap-0'}
      >
        <div className={'flex justify-between'}>
          <Title subtitle={'Listar'}>Salas</Title>
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
          service={roomListService}
          columns={columns}
          actions={actions}
          filters={filters}
        />
      </Content>
    </MainLayout>
  )
}
