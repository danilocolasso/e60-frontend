import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'

export const CustomerEdit = () => {
  return (
    <MainLayout>
      <Title subtitle={'Editar'}>Clientes</Title>
      <Content></Content>
    </MainLayout>
  )
}
