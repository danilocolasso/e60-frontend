import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { DataTable } from '@/components/ui/composite/DataTable'
import { Button } from '@/components/ui/primitives/Button'
import { Title } from '@/components/ui/primitives/Title'
import { useBranchList } from '@/pages/Branch/List/useBranchList.tsx'
import { branchListService } from '@/services/branch/branch-list.service.ts'
import { PlusIcon } from '@heroicons/react/16/solid'
import { InputSearch } from '@/components/ui/composite/InputSearch'

export const BranchList = () => {
  const { columns, actions, filters, handleDebouncedFilter } = useBranchList()

  return (
    <MainLayout>
      <div
        className={'flex flex-col justify-between gap-4 md:flex-row md:gap-0'}
      >
        <div className={'flex justify-between'}>
          <Title divider={false} subtitle={'Listar'}>
            Filiais
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
      <DataTable
        service={branchListService}
        columns={columns}
        actions={actions}
        filters={filters}
      />
    </MainLayout>
  )
}
