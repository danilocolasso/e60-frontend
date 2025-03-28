import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'
import { FieldGroup, Fieldset, Legend } from '@/components/ui/primitives/Fieldset'
import { Button } from '@/components/ui/primitives/Button'
import { useCouponCreate } from '@/pages/coupon/create/useCouponCreate'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/composite/Input'
import { Select } from '@/components/ui/composite/Select'
import { CouponDiscountType } from '@/types/coupon-discount-type'
import { Checkbox } from '@/components/ui/composite/Checkbox'
import { WeekdayLabels } from '@/types/weekday'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { recordToOptions } from '@/util/recordToOptions'
import { CouponUsageTypeLabels } from '@/types/coupon-usage-type'
import { InputDate } from '@/components/ui/composite/InputDate/InputDate'
import { RoomSelection } from './RoomSelection'
export const CouponCreate = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    loading,
    isQuantityDisabled,
  } = useCouponCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Cupons</Title>
      <Content>
        <form id={'new-coupon'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <Input
                label={'Código'}
                {...register('code')}
                error={errors.code?.message}
              />
              <div className={'flex gap-2'}>
                <Input
                  type={'number'}
                  step={0.01}
                  label={'Desconto'}
                  className={'w-full'}
                  {...register('discount')}
                  error={errors.discount?.message}
                />
                <Select
                  className='mt-[37px] w-24'
                  {...register('discount_type')}
                  error={errors.discount_type?.message}
                  options={[
                    {
                      label: '%',
                      value: CouponDiscountType.PERCENTAGE,
                    },
                    {
                      label: 'R$',
                      value: CouponDiscountType.FIXED,
                    },
                  ]}
                />
              </div>
              <Select
                label={'Tipo de uso'}
                options={recordToOptions(CouponUsageTypeLabels)}
                {...register('usage_type')}
                error={errors.usage_type?.message}
              />
              <Input
                label={'Quantidade'}
                {...register('quantity')}
                error={errors.quantity?.message}
                title={isQuantityDisabled ? 'Bloqueado por tipo de uso' : ''}
                disabled={isQuantityDisabled}
              />
              <InputDate
                label={'Validade'}
                {...register('valid_until')}
                error={errors.valid_until?.message}
              />
              <Input
                label={'Parceiro'}
                {...register('partner_name')}
                error={errors.partner_name?.message}
              />
              <Input
                type={'time'}
                label={'Horário de início'}
                {...register('start_time')}
                error={errors.start_time?.message}
              />
              <Input
                type={'time'}
                label={'Horário de término'}
                {...register('end_time')}
                error={errors.end_time?.message}
              />
              <InputDate
                label={'Data de início de reserva'}
                {...register('booking_start_date')}
                error={errors.booking_start_date?.message}
              />
              <InputDate
                label={'Data de término de reserva'}
                {...register('booking_end_date')}
                error={errors.booking_end_date?.message}
              />
              <RoomSelection
                control={control}
                error={errors.rooms?.message}
              />
              <Fieldset>
                <Disclosure
                  as={'div'}
                  className={'group relative flex flex-col gap-2'}
                  defaultOpen={true}
                >
                  <DisclosureButton
                    className={'cursor-pointer'}
                    as={SidebarItem}
                  >
                    <Legend>Dias válidos</Legend>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="ml-auto size-5 shrink-0 group-data-[open]:rotate-90 group-data-[open]:text-white"
                    />
                  </DisclosureButton>
                  <DisclosurePanel
                    as="ul"
                    className={
                      'flex flex-col gap-4 rounded-lg bg-zinc-50 p-4 dark:bg-zinc-800/40'
                    }
                  >
                    <Checkbox
                      control={control}
                      name={'valid_days'}
                      error={errors.valid_days?.message}
                      options={recordToOptions(WeekdayLabels)}
                    />
                  </DisclosurePanel>
                </Disclosure>
              </Fieldset>
            </div>
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/cupons')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'new-coupon'} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
