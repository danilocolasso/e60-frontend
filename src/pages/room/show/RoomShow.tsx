import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Button } from '@/components/ui/primitives/Button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/primitives/DescriptionList'
import { Title } from '@/components/ui/primitives/Title'
import { useRoomShow } from '@/pages/room/show/useRoomShow'
import { useNavigate } from 'react-router-dom'

export const RoomShow = () => {
  const navigate = useNavigate()
  const { room } = useRoomShow()

  return (
    <MainLayout>
      <Title subtitle={'Visualizar'}>Salas</Title>
      <Content>
        <DescriptionList>
          <DescriptionTerm></DescriptionTerm>
          <DescriptionDetails></DescriptionDetails>
        </DescriptionList>
        <div className={'flex justify-between'}>
          <Button
            type={'button'}
            onClick={() => navigate('/salas')}
          >
            Voltar
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
