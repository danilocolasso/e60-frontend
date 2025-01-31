import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Checkbox } from '@/components/ui/composite/Checkbox'
import { Input } from '@/components/ui/composite/Input'
import { Radio } from '@/components/ui/composite/Radio'
import { SelectRemote } from '@/components/ui/composite/SelectRemote'
import { Button } from '@/components/ui/primitives/Button'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { Title } from '@/components/ui/primitives/Title'
import { CustomerContacts } from '@/pages/customer/contacts'
import { useCustomerCreate } from '@/pages/customer/create/useCustomerCreate'
import { branchOptionsService } from '@/services/branch/branch-options.service'
import { useNavigate } from 'react-router-dom'
import { InputGroup } from '@/components/ui/primitives/Input'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { addressStateOptionsService } from '@/services/address/address-state-options.service.ts'

export const CustomerCreate = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    consultDocument
  } = useCustomerCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Clientes</Title>
      <Content>
        <form id={'new-customer'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <Input
                label={'Nome'}
                {...register('name')}
                error={errors.name?.message}
              />
              <Input
                label={'Email'}
                {...register('email')}
                error={errors.email?.message}
              />
              <Input
                label={'Usuário'}
                {...register('username')}
                error={errors.username?.message}
              />
              <Input
                label={'Senha'}
                type={'password'}
                {...register('password')}
                error={errors.password?.message}
              />
              <Input
                label={'Telefone'}
                {...register('phone')}
                error={errors.phone?.message}
              />
              <InputGroup className={'relative'}>
                <Button
                  onClick={consultDocument}
                  className={'!absolute bottom-0 right-0 z-20'}
                  title={'Consultar CNPJ'}
                >
                  <MagnifyingGlassIcon />
                </Button>
                <Input
                  label={'Documento'}
                  className={'pr-4'}
                  {...register('document_number')}
                  error={errors.document_number?.message}
                />
              </InputGroup>
              <Input
                label={'Data de Nascimento'}
                type={'date'}
                {...register('birth_date', { valueAsDate: true })}
                error={errors.birth_date?.message}
              />
              <Input
                label={'Endereço'}
                {...register('street')}
                error={errors.street?.message}
              />
              <Input
                label={'Número'}
                {...register('street_number')}
                error={errors.street_number?.message}
              />
              <Input
                label={'Bairro'}
                {...register('neighborhood')}
                error={errors.neighborhood?.message}
              />
              <Input
                label={'Cidade'}
                {...register('city')}
                error={errors.city?.message}
              />
              <SelectRemote
                label={'Estado'}
                service={addressStateOptionsService}
                {...register('state')}
                error={errors.state?.message}
              />
              <Input
                label={'CEP'}
                {...register('zip_code')}
                error={errors.zip_code?.message}
              />
              <Input
                label={'Complemento'}
                {...register('complement')}
                error={errors.complement?.message}
              />
              <SelectRemote
                label={'Filial'}
                service={branchOptionsService}
                {...register('branch_id')}
                error={errors.branch_id?.message}
              />
              <Checkbox
                name={'is_corporate'}
                control={control}
                label={'Corporativo'}
                error={errors.is_corporate?.message}
              />
              <Radio
                label={'Newsletter'}
                control={control}
                name={'newsletter'}
                error={errors.newsletter?.message}
                defaultValue={true}
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false },
                ]}
              />
            </div>

            <CustomerContacts
              register={register}
              control={control}
              errors={errors}
            />
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/clientes')}>Voltar</Button>
          <Button type={'submit'} form={'new-customer'}>
            Salvar
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
