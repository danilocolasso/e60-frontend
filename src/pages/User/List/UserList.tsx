import {
  DataTable,
  DataTableAction,
  DataTableColumn,
} from '@/components/common/DataTable'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { Title } from '@/components/ui/Title'
import { userListService } from '@/services/user/user-list.service.ts'
import { roles, User } from '@/types/User.ts'
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

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

export const UserList = () => {
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
      onClick: (item: User) => {
        console.log('Delete', item)
      },
    },
  ]

  return (
    <MainLayout>
      <div className={'flex justify-between'}>
        <Title divider={false} subtitle={'Listar'}>
          Usuários
        </Title>
        <Button href={'criar'}>
          Criar
          <PlusIcon />
        </Button>
      </div>
      <Divider />
      <DataTable
        service={userListService}
        columns={columns}
        actions={actions}
      />
    </MainLayout>
  )
}
