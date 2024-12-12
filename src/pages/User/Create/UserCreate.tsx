import { MainLayout } from '@/components/layouts/MainLayout'
import { Button } from '@/components/ui/Button'
import { Title } from '@/components/ui/Title'
import { useNavigate } from 'react-router-dom'

export const UserCreate = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Usuários</Title>
      <div className={'flex flex-1 flex-col justify-between'}>
        <span>...</span>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/administracao/usuarios')}>
            Voltar
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
