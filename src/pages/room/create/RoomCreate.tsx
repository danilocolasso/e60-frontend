import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { Button } from '@/components/ui/primitives/Button'
import { useRoomCreate } from '@/pages/room/create/useRoomCreate'
import { useNavigate } from 'react-router-dom'

export const RoomCreate = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    loading,
  } = useRoomCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Salas</Title>
      <Content>
        <form id={'new-room'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>

            </div>
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/salas')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'new-room'} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
