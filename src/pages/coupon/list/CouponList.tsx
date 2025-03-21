import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DataTable } from '@/components/ui/composite/DataTable'
import { InputSearch } from '@/components/ui/composite/InputSearch'
import { Button } from '@/components/ui/primitives/Button'
import { Title } from '@/components/ui/primitives/Title'
import { useCouponList } from '@/pages/coupon/list/useCouponList'
import { couponListService } from '@/services/coupon/coupon-list.service'
import { PlusIcon } from '@heroicons/react/16/solid'

export const CouponList = () => {
  const { columns, actions, filters, handleDebouncedFilter } = useCouponList()

  return (
    <MainLayout>
      <div
        className={'flex flex-col justify-between gap-4 md:flex-row md:gap-0'}
      >
        <div className={'flex justify-between'}>
          <Title subtitle={'Listar'}>Cupons</Title>
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
          service={couponListService}
          columns={columns}
          actions={actions}
          filters={filters}
        />
      </Content>
    </MainLayout>
  )
}
