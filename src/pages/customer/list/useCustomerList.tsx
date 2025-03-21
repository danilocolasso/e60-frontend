import { Confirm } from '@/components/common/Confirm'
import {
  DataTableAction,
  DataTableColumn,
} from '@/components/ui/composite/DataTable'
import { Badge } from '@/components/ui/primitives/Badge'
import { useFilters } from '@/hooks/useFilters'
import { customerDeleteService } from '@/services/customer/customer-delete.service'
import { Customer } from '@/types/customer'
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { dateFormat } from '@/util/dateFormat.ts'

interface Filters {
  query?: string
}

export const useCustomerList = () => {
  const navigate = useNavigate()

  const { filters, setFilters, handleDebouncedFilter } = useFilters<Filters>({
    query: '',
  })

  const columns: DataTableColumn<Customer>[] = [
    {
      key: 'name',
      label: 'Nome',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'phone',
      label: 'Telefone',
    },
    {
      key: 'birth_date',
      label: 'Nascimento',
      render: (row: Customer) => dateFormat(row.birth_date),
      sortable: true,
    },
    {
      key: 'is_corporate',
      label: 'Corporativo',
      sortable: true,
      render: (row: Customer) =>
        row.is_corporate ? (
          <Badge color={'green'}>Sim</Badge>
        ) : (
          <Badge color={'red'}>Não</Badge>
        ),
    },
  ]

  const actions: DataTableAction<Customer>[] = [
    {
      label: 'Visualizar',
      icon: MagnifyingGlassIcon,
      onClick: (item: Customer) => {
        navigate(`/clientes/visualizar/${item.id}`)
      },
    },
    {
      label: 'Editar',
      icon: PencilSquareIcon,
      onClick: (item: Customer) => {
        navigate(`/clientes/editar/${item.id}`)
      },
    },
    {
      label: 'Excluir',
      icon: TrashIcon,
      onClick: async (item: Customer) => {
        const id = toast.warning(
          ({ closeToast }) => (
            <Confirm
              title={`Tem certeza que deseja excluir o cliente ${item.name}?`}
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

  const handleDelete = async (toastId: any, item: Customer) => {
    toast.update(toastId, {
      render: 'Excluindo cliente...',
      isLoading: true,
    })

    try {
      await customerDeleteService(item)
      toast.update(toastId, {
        render: 'Cliente excluído com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      setFilters({ ...filters })
    } catch (error: any) {
      toast.update(toastId, {
        render: 'Erro ao excluir cliente',
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
