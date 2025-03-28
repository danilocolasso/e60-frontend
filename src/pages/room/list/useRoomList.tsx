import { Confirm } from '@/components/common/Confirm'
import {
  DataTableAction,
  DataTableColumn,
} from '@/components/ui/composite/DataTable'
import { Badge } from '@/components/ui/primitives/Badge'
import { useFilters } from '@/hooks/useFilters'
import { roomDeleteService } from '@/services/room/room-delete.service'
import { Room } from '@/types/room'
import { dateFormat } from '@/util/dateFormat'
import { timeFormat } from '@/util/timeFormat'
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

export const useRoomList = () => {
  const navigate = useNavigate()

  const { filters, setFilters, handleDebouncedFilter } = useFilters<Filters>({
    query: '',
  })

  const columns: DataTableColumn<Room>[] = [
    {
      key: 'name',
      label: 'Nome',
      sortable: true,
    },
    {
      key: 'branch',
      label: 'Filial',
      sortable: true,
    },
    {
      key: 'valid_from',
      label: 'Validade Início',
      sortable: true,
      render: (item: Room) => dateFormat(item.valid_from),
    },
    {
      key: 'valid_until',
      label: 'Validade Fim',
      sortable: true,
      render: (item: Room) => dateFormat(item.valid_until),
    },
    {
      key: 'min_participants',
      label: 'Participantes (min)',
      sortable: true,
    },
    {
      key: 'max_participants',
      label: 'Participantes (max)',
      sortable: true,
    },
    {
      key: 'duration_in_minutes',
      label: 'Duração',
      sortable: true,
      render: (item: Room) => timeFormat(item.duration_in_minutes),
    },
    {
      key: 'is_multi_participants',
      label: 'Multi Participantes',
      sortable: true,
      render: (item: Room) => {
        return item.is_multi_participants ? (
          <Badge>{'Sim'}</Badge>
        ) : (
          <Badge>{'Não'}</Badge>
        )
      },
    },
    {
      key: 'is_delivery',
      label: 'Delivery',
      sortable: true,
      render: (item: Room) => {
        return item.is_delivery ? (
          <Badge>{'Sim'}</Badge>
        ) : (
          <Badge>{'Não'}</Badge>
        )
      },
    },
    {
      key: 'is_active',
      label: 'Status',
      sortable: true,
      render: (item: Room) => {
        return item.is_active ? (
          <Badge color={'green'}>{'Ativo'}</Badge>
        ) : (
          <Badge color={'red'}>{'Inativo'}</Badge>
        )
      },
    },
  ]
  const actions: DataTableAction<Room>[] = [
    {
      label: 'Visualizar',
      icon: MagnifyingGlassIcon,
      onClick: (item: Room) => {
        navigate(`/salas/visualizar/${item.id}`)
      },
    },
    {
      label: 'Editar',
      icon: PencilSquareIcon,
      onClick: (item: Room) => {
        navigate(`/salas/editar/${item.id}`)
      },
    },
    {
      label: 'Excluir',
      icon: TrashIcon,
      onClick: async (item: Room) => {
        const id = toast.warning(
          ({ closeToast }) => (
            <Confirm
              title={`Tem certeza que deseja excluir a sala ${item.name}?`}
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

  const handleDelete = async (toastId: any, item: Room) => {
    toast.update(toastId, {
      render: 'Excluindo sala...',
      isLoading: true,
    })

    try {
      await roomDeleteService(item)
      toast.update(toastId, {
        render: 'Sala excluída com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      setFilters({ ...filters })
    } catch (error: any) {
      toast.update(toastId, {
        render: 'Erro ao excluir sala',
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
