import {
  DataTable,
  DataTableAction,
  DataTableColumn,
} from '@/components/common/DataTable'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Badge } from '@/components/ui/Badge'
import { roles } from '@/pages/User/Profile'
import { userListService } from '@/services/user/user-list.service.ts'
import { User } from '@/types/User.ts'
import { useNavigate } from 'react-router-dom'
import { Title } from '@/components/common/Title'

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
      onClick: (item: User) => {
        navigate(`/administracao/usuarios/${item.id}`)
      },
    },
    {
      label: 'Editar',
      onClick: (item: User) => {
        console.log('Edit', item)
      },
    },
    {
      label: 'Excluir',
      onClick: (item: User) => {
        console.log('Delete', item)
      },
    },
  ]

  return (
    <MainLayout>
      <Title>Usuários</Title>
      <DataTable
        service={userListService}
        columns={columns}
        actions={actions}
      />
    </MainLayout>
  )
}
