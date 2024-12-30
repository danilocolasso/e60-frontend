import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Badge } from '@/components/ui/primitives/Badge'
import { Button } from '@/components/ui/primitives/Button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/primitives/DescriptionList'
import { Title } from '@/components/ui/primitives/Title'
import { useUserShow } from '@/pages/User/Show/useUserShow.ts'
import { roles } from '@/types/User'
import { dateTimeFormat } from '@/util/dateTimeFormat.ts'
import { useNavigate } from 'react-router-dom'

export const UserShow = () => {
  const navigate = useNavigate()
  const { user } = useUserShow()

  return (
    <MainLayout>
      <Title subtitle={'Visualizar'}>Usuários</Title>
      <div className={'flex flex-1 flex-col justify-between'}>
        <DescriptionList>
          <DescriptionTerm>Nome</DescriptionTerm>
          <DescriptionDetails>{user?.name}</DescriptionDetails>
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>{user?.email}</DescriptionDetails>
          <DescriptionTerm>Perfil</DescriptionTerm>
          <DescriptionDetails>
            <Badge>{user && roles[user.role]}</Badge>
          </DescriptionDetails>
          <DescriptionTerm>Criado em</DescriptionTerm>
          <DescriptionDetails>
            {user?.created_at && dateTimeFormat(user.created_at)}
          </DescriptionDetails>
        </DescriptionList>
        <div className={'flex justify-between'}>
          <Button
            type={'button'}
            onClick={() => navigate('/administracao/usuarios')}
          >
            Voltar
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
