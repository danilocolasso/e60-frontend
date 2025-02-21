import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Checkbox } from '@/components/ui/composite/Checkbox'
import { Input } from '@/components/ui/composite/Input'
import { Radio } from '@/components/ui/composite/Radio'
import { SelectRemote } from '@/components/ui/composite/SelectRemote'
import { Button } from '@/components/ui/primitives/Button'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { InputGroup } from '@/components/ui/primitives/Input'
import { Title } from '@/components/ui/primitives/Title'
import { CustomerContacts } from '@/pages/customer/contacts'
import { useCustomerEdit } from '@/pages/customer/edit/useCustomerEdit'
import { addressStateOptionsService } from '@/services/address/address-state-options.service'
import { branchOptionsService } from '@/services/branch/branch-options.service'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

export const CustomerEdit = () => {
  const navigate = useNavigate()
  const { register, control, handleSubmit, errors, consultDocument } =
    useCustomerEdit()

  return (
    <MainLayout>
      <Title subtitle={'Editar'}>Clientes</Title>
      <Content>
        <form id={'edit-customer'} onSubmit={handleSubmit}>
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
              <Input
                label={'Celular'}
                {...register('cellphone')}
                error={errors.cellphone?.message}
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
                type={'number'}
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
          <Button type={'submit'} form={'edit-customer'}>
            Salvar
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
