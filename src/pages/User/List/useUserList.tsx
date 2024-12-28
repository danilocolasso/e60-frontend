import { Confirm } from '@/components/common/Confirm'
import {
  DataTableAction,
  DataTableColumn,
} from '@/components/ui/composite/DataTable'
import { Badge } from '@/components/ui/primitives/Badge'
import { userDeleteService } from '@/services/user/user-delete.service.ts'
import { roles, User } from '@/types/User'
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useUserList = () => {
  const columns: DataTableColumn<User>[] = [
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
      key: 'role',
      label: 'Perfil',
      sortable: true,
      value: (row: User) => <Badge>{roles[row.role]}</Badge>,
    },
  ]

  const navigate = useNavigate()

  const actions: DataTableAction<User>[] = [
    {
      label: 'Visualizar',
      icon: MagnifyingGlassIcon,
      onClick: (item: User) => {
        navigate(`/administracao/usuarios/visualizar/${item.id}`)
      },
    },
    {
      label: 'Editar',
      icon: PencilSquareIcon,
      onClick: (item: User) => {
        navigate(`/administracao/usuarios/editar/${item.id}`)
      },
    },
    {
      label: 'Excluir',
      icon: TrashIcon,
      onClick: async (item: User) => {
        const id = toast.warning(
          ({ closeToast }) => (
            <Confirm
              title={`Tem certeza que deseja excluir o usuário ${item.name}?`}
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

  const handleDelete = async (toastId: any, item: User) => {
    toast.update(toastId, {
      render: 'Excluindo usuário...',
      isLoading: true,
    })

    try {
      await userDeleteService(item)
      toast.update(toastId, {
        render: 'Usuário excluído com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/administracao/usuarios')
    } catch (error: any) {
      toast.update(toastId, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao excluir o usuário. Por favor, tente novamente mais tarde',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    }
  }

  return {
    columns,
    actions,
  }
}
