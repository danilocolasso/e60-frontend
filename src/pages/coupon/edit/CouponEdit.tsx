import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { Button } from '@/components/ui/primitives/Button'
import { useCouponEdit } from '@/pages/coupon/edit/useCouponEdit'
import { useNavigate } from 'react-router-dom'

export const CouponEdit = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    loading,
  } = useCouponEdit()

  return (
    <MainLayout>
      <Title subtitle={'Editar'}>Cupons</Title>
      <Content>
        <form id={'edit-coupon'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>

            </div>
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/cupons')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'edit-coupon'} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
