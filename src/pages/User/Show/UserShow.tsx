import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Badge } from '@/components/ui/primitives/Badge'
import { Button } from '@/components/ui/primitives/Button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/primitives/DescriptionList'
import { Title } from '@/components/ui/primitives/Title'
import { userShowService } from '@/services/user/user-show.service.ts'
import { roles, User } from '@/types/User'
import { dateTimeFormat } from '@/util/dateTimeFormat.ts'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const UserShow = () => {
  const [user, setUser] = useState<User | null>(null)
  const { id } = useParams()
  const navigate = useNavigate()

  const fetch = async () => {
    try {
      const data = await userShowService({
        id: Number(id),
      })
      setUser(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [])

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
