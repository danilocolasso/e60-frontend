import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { Button } from '@/components/ui/primitives/Button'
import { useRoomEdit } from '@/pages/room/edit/useRoomEdit'
import { useNavigate } from 'react-router-dom'

export const RoomEdit = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    loading,
  } = useRoomEdit()

  return (
    <MainLayout>
      <Title subtitle={'Editar'}>Salas</Title>
      <Content>
        <form id={'edit-room'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>

            </div>
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/salas')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'edit-room'} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
