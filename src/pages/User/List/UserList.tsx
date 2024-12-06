import {
  DataTable,
  DataTableAction,
  DataTableColumn,
} from '@/components/common/DataTable'
import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { userListService } from '@/services/user/user-list.service.ts'
import { User } from '@/types/User.ts'

const columns: DataTableColumn<User>[] = [
  {
    key: 'name',
    label: 'Nome',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'role',
    label: 'Perfil',
  },
]

const actions: DataTableAction<User>[] = [
  {
    label: 'Edit',
    onClick: (item) => {
      console.log('Edit', item)
    },
  },
  {
    label: 'Delete',
    onClick: (item) => {
      console.log('Delete', item)
    },
  },
]

export const UserList = () => {
  return (
    <MainLayout>
      <DataTable
        service={userListService}
        columns={columns}
        actions={actions}
      />
    </MainLayout>
  )
}
