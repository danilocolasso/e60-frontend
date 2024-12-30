import { MainLayout } from '@/components/layouts/MainLayout'
import { CheckboxRemote } from '@/components/ui/composite/CheckboxRemote'
import { Input } from '@/components/ui/composite/Input'
import { Radio } from '@/components/ui/composite/Radio'
import { Select } from '@/components/ui/composite/Select'
import { Button } from '@/components/ui/primitives/Button'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { Title } from '@/components/ui/primitives/Title'
import { useUserCreate } from '@/pages/User/Create/useUserCreate'
import { branchOptionsService } from '@/services/branch/branch-options.service'
import { roles } from '@/types/User'
import { recordToOptions } from '@/util/recordToOptions'
import { useNavigate } from 'react-router-dom'

export const UserCreate = () => {
  const navigate = useNavigate()
  const { register, control, handleSubmit, errors } = useUserCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Usuários</Title>
      <div className={'flex flex-1 flex-col gap-4 justify-between'}>
        <form id={'new-user'} onSubmit={handleSubmit}>
          <FieldGroup className={'max-w-4xl'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <Input
                label={'Nome'}
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label={'Email'}
                type={'email'}
                error={errors.email?.message}
                {...register('email')}
              />
            </div>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <Input
                label={'Usuário'}
                error={errors.username?.message}
                {...register('username')}
              />
              <Select
                label={'Perfil'}
                id={'role'}
                options={recordToOptions(roles)}
                {...register('role')}
              />
            </div>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <Input
                label={'Senha'}
                type={'password'}
                error={errors.password?.message}
                {...register('password')}
              />
              <Input
                label={'Confirmação de senha'}
                type={'password'}
                error={errors.password_confirmation?.message}
                {...register('password_confirmation')}
              />
            </div>
            <Radio
              label={'Exibir relatório de gestão'}
              control={control}
              name={'management_report_show'}
              defaultValue={'true'}
              options={[
                { label: 'Sim', value: 'true' },
                { label: 'Não', value: 'false' },
              ]}
            />
            <CheckboxRemote
              label={'Filiais'}
              name={'branches'}
              service={branchOptionsService}
              control={control}
              error={errors.branches?.message}
            />
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/administracao/usuarios')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'new-user'}>
            Salvar
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
