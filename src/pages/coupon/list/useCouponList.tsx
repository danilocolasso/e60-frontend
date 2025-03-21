import { Confirm } from '@/components/common/Confirm'
import {
  DataTableAction,
  DataTableColumn,
} from '@/components/ui/composite/DataTable'
import { Badge } from '@/components/ui/primitives/Badge'
import { useFilters } from '@/hooks/useFilters'
import { couponDeleteService } from '@/services/coupon/coupon-delete.service'
import { CouponDiscountType } from '@/types/coupon-discount-type'
import { CouponList } from '@/types/coupon-list'
import { CouponUsageType, CouponUsageTypeLabels } from '@/types/coupon-usage-type'
import { currencyFormat } from '@/util/currencyFormat'
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface Filters {
  query?: string
}

export const useCouponList = () => {
  const navigate = useNavigate()

  const { filters, setFilters, handleDebouncedFilter } = useFilters<Filters>({
    query: '',
  })

  const columns: DataTableColumn<CouponList>[] = [
    {
      key: 'code',
      label: 'Código',
      sortable: true,
    },
    {
      key: 'discount',
      label: 'Desconto',
      sortable: true,
      render: (item: CouponList) => {
        return currencyFormat(item.discount, { showPrefix: item.discount_type === CouponDiscountType.FIXED }) 
          + (item.discount_type === CouponDiscountType.PERCENTAGE ? '%' : '')
      },
    },
    {
      key: 'branches',
      label: 'Filiais',
      render: (item: CouponList) => {
        return item.branches.map((branch) => branch).join(', ')
      },
    },
    {
      key: 'usage_type',
      label: 'Tipo de uso',
      sortable: true,
      render: (item: CouponList) => {
        return <Badge>{CouponUsageTypeLabels[item.usage_type]}</Badge>
      },
    },
    {
      key: 'quantity',
      label: 'Quantidade',
      sortable: true,
      render: (item: CouponList) => ([CouponUsageType.UNLIMITED, CouponUsageType.UNIQUE].includes(item.usage_type) ? '-' : item.quantity),
    },
    {
      key: 'usages',
      label: 'Usos',
      sortable: true,
    },
  ]

  const actions: DataTableAction<CouponList>[] = [
    {
      label: 'Visualizar',
      icon: MagnifyingGlassIcon,
      onClick: (item: CouponList) => {
        navigate(`/cupons/visualizar/${item.id}`)
      },
    },
    {
      label: 'Editar',
      icon: PencilSquareIcon,
      onClick: (item: CouponList) => {
        navigate(`/cupons/editar/${item.id}`)
      },
    },
    {
      label: 'Excluir',
      icon: TrashIcon,
      onClick: async (item: CouponList) => {
        const id = toast.warning(
          ({ closeToast }) => (
            <Confirm
              title={`Tem certeza que deseja excluir o cupom ${item.code}?`}
              confirm={{
                label: 'Excluir',
                color: 'red',
                onClick: () => handleDelete(id, item),
              }}
              cancel={{
                label: 'Cancelar',
                onClick: closeToast,
              }}
            />
          ),
          {
            autoClose: false,
          },
        )
      },
    },
  ]

  const handleDelete = async (toastId: any, item: CouponList) => {
    toast.update(toastId, {
      render: 'Excluindo cupom...',
      isLoading: true,
    })

    try {
      await couponDeleteService(item)
      toast.update(toastId, {
        render: 'Cupom excluído com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      setFilters({ ...filters })
    } catch (error: any) {
      toast.update(toastId, {
        render: 'Erro ao excluir cupom',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    }
  }

  return {
    columns,
    actions,
    filters,
    handleDebouncedFilter,
  }
}
