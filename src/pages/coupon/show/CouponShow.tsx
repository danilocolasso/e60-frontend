import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Badge } from '@/components/ui/primitives/Badge'
import { Button } from '@/components/ui/primitives/Button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/primitives/DescriptionList'
import { Title } from '@/components/ui/primitives/Title'
import { useCouponShow } from '@/pages/coupon/show/useCouponShow'
import { CouponDiscountType } from '@/types/coupon-discount-type'
import { CouponUsageType, CouponUsageTypeLabels } from '@/types/coupon-usage-type'
import { WeekdayLabels } from '@/types/weekday'
import { currencyFormat } from '@/util/currencyFormat'
import { dateFormat } from '@/util/dateFormat'
import { useNavigate } from 'react-router-dom'

export const CouponShow = () => {
  const navigate = useNavigate()
  const { coupon } = useCouponShow()

  return (
    <MainLayout>
      <Title subtitle={'Visualizar'}>Cupons</Title>
      <Content>
        <DescriptionList>
          <DescriptionTerm>Código</DescriptionTerm>
          <DescriptionDetails>{coupon?.code}</DescriptionDetails>
          <DescriptionTerm>Desconto</DescriptionTerm>
          <DescriptionDetails>
            {coupon ? currencyFormat(coupon.discount, { showPrefix: coupon.discount_type === CouponDiscountType.FIXED }) : '-'}
            {coupon?.discount_type === CouponDiscountType.PERCENTAGE ? '%' : ''}
          </DescriptionDetails>
          <DescriptionTerm>Filiais</DescriptionTerm>
          <DescriptionDetails className='flex flex-wrap gap-2'>
            {coupon?.branches.map((name) => <Badge key={name}>{name}</Badge>)}
          </DescriptionDetails>
          <DescriptionTerm>Tipo de uso</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.usage_type ? CouponUsageTypeLabels[coupon.usage_type] : ''}
          </DescriptionDetails>
          <DescriptionTerm>Quantidade</DescriptionTerm>
          <DescriptionDetails>
            { coupon ? ([CouponUsageType.UNLIMITED, CouponUsageType.UNIQUE].includes(coupon?.usage_type) ? '-' : coupon?.quantity) : ''}
          </DescriptionDetails>
          <DescriptionTerm>Usos</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.usages}
          </DescriptionDetails>
          <DescriptionTerm>Validade</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.valid_until ? dateFormat(coupon?.valid_until) : '-'}
          </DescriptionDetails>
          <DescriptionTerm>Horário de início</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.start_time}
          </DescriptionDetails>
          <DescriptionTerm>Horário de término</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.end_time}
          </DescriptionDetails>
          <DescriptionTerm>Parceiro</DescriptionTerm>
          <DescriptionDetails>{coupon?.partner_name}</DescriptionDetails>
          <DescriptionTerm>Dias válidos</DescriptionTerm>
          <DescriptionDetails className='flex flex-wrap gap-2'>
            {coupon?.valid_days
              ? Object.entries(coupon?.valid_days)
                  .filter(([_, value]) => value)
                  .map(([key]) => (
                    <Badge key={key}>
                      {WeekdayLabels[key as keyof typeof WeekdayLabels]}
                    </Badge>
                  ))
              : '-'}
          </DescriptionDetails>
          <DescriptionTerm>Data de início de reserva</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.booking_start_date ? dateFormat(coupon?.booking_start_date) : '-'}
          </DescriptionDetails>
          <DescriptionTerm>Data de término de reserva</DescriptionTerm>
          <DescriptionDetails>
            {coupon?.booking_end_date
              ? dateFormat(coupon?.booking_end_date)
              : '-'}
          </DescriptionDetails>
        </DescriptionList>
        <div className={'flex justify-between'}>
          <Button
            type={'button'}
            onClick={() => navigate('/cupons')}
          >
            Voltar
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
