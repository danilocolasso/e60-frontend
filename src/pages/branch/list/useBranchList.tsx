import { Confirm } from '@/components/common/Confirm'
import {
  DataTableAction,
  DataTableColumn,
} from '@/components/ui/composite/DataTable'
import { useFilters } from '@/hooks/useFilters'
import { branchDeleteService } from '@/services/branch/branch-delete.service'
import { Branch } from '@/types/branch.ts'
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Badge } from '@/components/ui/primitives/Badge'

interface Filters {
  query?: string
}

export const useBranchList = () => {
  const navigate = useNavigate()

  const { filters, setFilters, handleDebouncedFilter } = useFilters<Filters>({
    query: '',
  })

  const columns: DataTableColumn<Branch>[] = [
    {
      key: 'name',
      label: 'Nome',
      sortable: true,
    },
    {
      key: 'phone',
      label: 'Telefone',
    },
    {
      key: 'rps',
      label: 'Filial RPS',
      render: (row: Branch) => row.rps?.name,
      sortable: true,
    },
    {
      key: 'type',
      label: 'Tipo',
      sortable: true,
    },
    {
      key: 'admin',
      label: 'Administrador',
      render: (row: Branch) => row.admin?.name,
      sortable: true,
    },
    {
      key: 'is_advance_voucher',
      label: 'Voucher',
      render: (row: Branch) =>
        row.is_advance_voucher ? (
          <Badge color={'green'}>Sim</Badge>
        ) : (
          <Badge color={'red'}>Não</Badge>
        ),
      sortable: true,
    },
    {
      key: 'is_active',
      label: 'Ativo',
      render: (row: Branch) =>
        row.is_active ? (
          <Badge color={'green'}>Sim</Badge>
        ) : (
          <Badge color={'red'}>Não</Badge>
        ),
      sortable: true,
    },
  ]

  const actions: DataTableAction<Branch>[] = [
    {
      label: 'Visualizar',
      icon: MagnifyingGlassIcon,
      onClick: (item: Branch) => {
        navigate(`/administracao/filiais/visualizar/${item.id}`)
      },
    },
    {
      label: 'Editar',
      icon: PencilSquareIcon,
      onClick: (item: Branch) => {
        navigate(`/administracao/filiais/editar/${item.id}`)
      },
    },
    {
      label: 'Excluir',
      icon: TrashIcon,
      onClick: async (item: Branch) => {
        const id = toast.warning(
          ({ closeToast }) => (
            <Confirm
              title={`Tem certeza que deseja excluir a filial ${item.name}?`}
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

  const handleDelete = async (toastId: any, item: Branch) => {
    toast.update(toastId, {
      render: 'Excluindo filial...',
      isLoading: true,
    })

    try {
      await branchDeleteService(item)
      toast.update(toastId, {
        render: 'Filial excluída com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      setFilters({ ...filters })
    } catch (error: any) {
      toast.update(toastId, {
        render: 'Erro ao excluir filial',
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
