import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { User } from '@/types/User.ts'

export const roles: Record<User['role'], string> = {
  admin: 'ADMINISTRADOR',
  user: 'USUÁRIO',
  agency: 'AGÊNCIA',
  reception: 'RECEPÇÃO',
}

export const UserProfile = () => {
  return (
    <MainLayout>
      <h1>Doing...</h1>
    </MainLayout>
  )
}
