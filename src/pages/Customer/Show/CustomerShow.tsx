import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'

export const CustomerShow = () => {
  return (
    <MainLayout>
      <Title subtitle={'Visualizar'}> Clientes</Title>
      <Content></Content>
    </MainLayout>
  )
}
