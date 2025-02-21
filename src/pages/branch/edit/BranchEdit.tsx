import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Input } from '@/components/ui/composite/Input'
import { Radio } from '@/components/ui/composite/Radio'
import { SelectRemote } from '@/components/ui/composite/SelectRemote'
import { Textarea } from '@/components/ui/composite/Textarea/Textarea.tsx'
import { Button } from '@/components/ui/primitives/Button'
import {
  FieldGroup,
  Fieldset,
  Legend,
} from '@/components/ui/primitives/Fieldset'
import { Title } from '@/components/ui/primitives/Title'
import { useBranchEdit } from '@/pages/branch/edit/useBranchEdit'
import { addressStateOptionsService } from '@/services/address/address-state-options.service'
import { branchOptionsService } from '@/services/branch/branch-options.service.ts'
import { branchTypeOptions } from '@/services/branch/branch-type-options.service'
import { userOptionsService } from '@/services/user/user-options.service'
import { useNavigate } from 'react-router-dom'

export const BranchEdit = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    loading,
  } = useBranchEdit()

  return (
    <MainLayout>
      <Title subtitle={'Editar'}>Filiais</Title>
      <Content>
        <form id={'edit-branch'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <Input
                label={'Nome'}
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label={'Telefone'}
                error={errors.phone?.message}
                {...register('phone')}
              />
              <SelectRemote
                label={'Tipo'}
                service={branchTypeOptions}
                {...register('type')}
                error={errors.type?.message}
              />
              <SelectRemote
                label={'Administrador'}
                service={userOptionsService}
                emptyOption={true}
                {...register('admin_user_id')}
                error={errors.admin_user_id?.message}
              />
              <Input
                label={'Endereço'}
                error={errors.address?.message}
                {...register('address')}
              />
              <div className={'flex flex-col gap-8 md:flex-row md:gap-4'}>
                <Input
                  label={'CEP'}
                  className={'md:w-full'}
                  error={errors.zip_code?.message}
                  {...register('zip_code')}
                />
                <SelectRemote
                  label={'Estado'}
                  className={'md:w-24'}
                  service={addressStateOptionsService}
                  {...register('state')}
                  error={errors.state?.message}
                />
              </div>
              <Fieldset className={'md:col-span-2'}>
                <Legend>Proposta</Legend>
                <Textarea
                  label={'Forma de pagamento'}
                  rows={8}
                  error={errors.proposal_text?.message}
                  {...register('proposal_text')}
                />
              </Fieldset>
              <Radio
                label={'Voucher antecipado'}
                name={'is_advance_voucher'}
                control={control}
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false },
                ]}
                error={errors.is_advance_voucher?.message}
              />
              <Radio
                label={'Ativo'}
                name={'is_active'}
                control={control}
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false },
                ]}
                error={errors.is_active?.message}
              />
              <Fieldset>
                <Legend>Dados para geração RPS</Legend>
                <SelectRemote
                  label={'Filial RPS'}
                  service={branchOptionsService}
                  error={errors.rps_id?.message}
                  {...register('rps_id')}
                />
              </Fieldset>
              <Fieldset
                className={
                  'rounded-md border p-4 md:col-span-2 dark:border-white/10'
                }
              >
                <Legend>Giftcard</Legend>
                <div
                  className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}
                >
                  <Input
                    type={'number'}
                    step={0.01}
                    label={'Valor por pessoa'}
                    error={errors.giftcard_value_per_person?.message}
                    {...register('giftcard_value_per_person')}
                  />
                  <Input
                    type={'number'}
                    label={'Limite por pessoa'}
                    error={errors.giftcard_person_limit?.message}
                    {...register('giftcard_person_limit')}
                  />
                </div>
              </Fieldset>
              <Fieldset
                className={
                  'rounded-md border p-4 md:col-span-2 dark:border-white/10'
                }
              >
                <Legend>Integração eNotas</Legend>
                <div className={'grid grid-cols-1 gap-4 md:grid-cols-2'}>
                  <Input
                    label={'API Key'}
                    error={errors.enotas?.api_key?.message}
                    {...register('enotas.api_key')}
                  />
                  <Input
                    label={'Empresa ID'}
                    error={errors.enotas?.company_id?.message}
                    {...register('enotas.company_id')}
                  />
                </div>
              </Fieldset>
              <Fieldset
                className={
                  'rounded-md border p-4 md:col-span-2 dark:border-white/10'
                }
              >
                <Legend>Integração PagSeguro</Legend>
                <div className={'flex flex-col gap-8 md:gap-4'}>
                  <Input
                    label={'Email'}
                    error={errors.pagseguro?.email?.message}
                    {...register('pagseguro.email')}
                  />
                  <Input
                    label={'Token'}
                    error={errors.pagseguro?.token?.message}
                    {...register('pagseguro.token')}
                  />
                  <Input
                    label={'Client id'}
                    error={errors.pagseguro?.client_id?.message}
                    {...register('pagseguro.client_id')}
                  />
                  <Input
                    label={'Client secret'}
                    error={errors.pagseguro?.client_secret?.message}
                    {...register('pagseguro.client_secret')}
                  />
                </div>
              </Fieldset>
              <Fieldset
                className={
                  'rounded-md border p-4 md:col-span-2 dark:border-white/10'
                }
              >
                <Legend>Integração Paypal</Legend>
                <div className={'flex flex-col gap-8 md:gap-4'}>
                  <Input
                    label={'Usuário'}
                    error={errors.paypal?.user?.message}
                    {...register('paypal.user')}
                  />
                  <Input
                    type={'password'}
                    label={'Senha'}
                    error={errors.paypal?.password?.message}
                    {...register('paypal.password')}
                  />
                  <Input
                    label={'Assinatura'}
                    error={errors.paypal?.signature?.message}
                    {...register('paypal.signature')}
                  />
                </div>
              </Fieldset>
            </div>
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/administracao/filiais')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'edit-branch'} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
