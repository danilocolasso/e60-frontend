import { MainLayout } from '@/components/layouts/MainLayout.tsx'
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
import { useBranchCreate } from '@/pages/branch/create/useBranchCreate.ts'
import { addressStateOptionsService } from '@/services/address/address-state-options.service.ts'
import { branchOptionsService } from '@/services/branch/branch-options.service.ts'
import { branchRpsFormatOptionsService } from '@/services/branch/branch-rps-format-options.service.ts'
import { branchRpsSimplesNationalOptantOptionsService } from '@/services/branch/branch-rps-simples-national-optant-options.service.ts'
import { branchRpsSpecialTaxRegimeInvoiceOptionsService } from '@/services/branch/branch-rps-special-tax-regime-invoice.service.ts'
import { branchRpsTaxServiceInvoiceOptionsService } from '@/services/branch/branch-rps-tax-service-invoice-options.service.ts'
import { branchTypeOptions } from '@/services/branch/branch-type-options.service.ts'
import { userOptionsService } from '@/services/user/user-options.service.ts'
import { useNavigate } from 'react-router-dom'
import { Content } from '@/components/common/Content'

export const BranchCreate = () => {
  const navigate = useNavigate()
  const { register, control, handleSubmit, errors } = useBranchCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Filiais</Title>
      <Content>
        <form id={'new-branch'} onSubmit={handleSubmit}>
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
              <Fieldset
                className={
                  'rounded-md border p-4 md:col-span-2 dark:border-white/10'
                }
              >
                <Legend>Dados para geração RPS</Legend>
                <div
                  className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}
                >
                  <SelectRemote
                    label={'Filial RPS'}
                    service={branchOptionsService}
                    error={errors.rps_id?.message}
                    {...register('rps_id')}
                  />
                  <div className={'flex flex-col gap-8 md:flex-row md:gap-4'}>
                  <SelectRemote
                    label={'Formato RPS'}
                    className={'md:w-full'}
                    service={branchRpsFormatOptionsService}
                    error={errors.rps_format?.message}
                    {...register('rps_format')}
                  />
                  <Input
                    label={'Código do Serviço'}
                    className={'md:w-72'}
                    error={errors.rps_code_service?.message}
                    {...register('rps_code_service')}
                  />
                  </div>
                </div>
              </Fieldset>
              <Input
                label={'CNPJ'}
                error={errors.cnpj?.message}
                {...register('cnpj')}
              />
              <Input
                label={'Inscrição municipal'}
                error={errors.municipal_registration?.message}
                {...register('municipal_registration')}
              />
              <SelectRemote
                label={'Tributação de Serviços da Nota'}
                service={branchRpsTaxServiceInvoiceOptionsService}
                error={errors.rps_tax_service_invoice?.message}
                {...register('rps_tax_service_invoice')}
              />
              <SelectRemote
                label={'Regime Especial de Tributação da Nota'}
                service={branchRpsSpecialTaxRegimeInvoiceOptionsService}
                error={errors.rps_special_tax_regime_invoice?.message}
                {...register('rps_special_tax_regime_invoice')}
              />
              <SelectRemote
                label={'Opção pelo Simples Nacional'}
                service={branchRpsSimplesNationalOptantOptionsService}
                error={errors.rps_simple_national_optant?.message}
                {...register('rps_simple_national_optant')}
              />
              <Input
                type={'number'}
                label={'Código do Serviço da lista Federal (LC 116)'}
                error={errors.rps_federal_service_code?.message}
                {...register('rps_federal_service_code')}
              />
              <Input
                type={'number'}
                label={'Código do Serviço da lista Municipal'}
                error={errors.rps_municipal_service_code?.message}
                {...register('rps_municipal_service_code')}
              />
              <Input
                type={'number'}
                label={'Código Tributação Município'}
                error={errors.rps_municipal_taxation_code?.message}
                {...register('rps_municipal_taxation_code')}
              />
              <Input
                type={'number'}
                label={'Código Item Lista de Serviço'}
                error={errors.rps_item_list_service?.message}
                {...register('rps_item_list_service')}
              />
              <Input
                type={'number'}
                step={0.01}
                label={'Valor da Alíquota (%)'}
                error={errors.rps_tax_rate?.message}
                {...register('rps_tax_rate')}
              />
              <Input
                type={'number'}
                label={'Último número RPS gerado'}
                error={errors.rps_last_number?.message}
                {...register('rps_last_number')}
              />

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
          <Button type={'submit'} form={'new-branch'}>
            Salvar
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
