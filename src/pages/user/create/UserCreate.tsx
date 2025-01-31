import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { CheckboxRemote } from '@/components/ui/composite/CheckboxRemote'
import { Input } from '@/components/ui/composite/Input'
import { Radio } from '@/components/ui/composite/Radio'
import { Select } from '@/components/ui/composite/Select'
import { Button } from '@/components/ui/primitives/Button'
import {
  FieldGroup,
  Fieldset,
  Legend,
} from '@/components/ui/primitives/Fieldset'
import { SidebarItem } from '@/components/ui/primitives/Sidebar'
import { Title } from '@/components/ui/primitives/Title'
import { useUserCreate } from '@/pages/user/create/useUserCreate'
import { branchOptionsService } from '@/services/branch/branch-options.service'
import { roles } from '@/types/user.ts'
import { recordToOptions } from '@/util/recordToOptions'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { useNavigate } from 'react-router-dom'

export const UserCreate = () => {
  const navigate = useNavigate()
  const { register, control, handleSubmit, errors } = useUserCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Usuários</Title>
      <Content>
        <form id={'new-user'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
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
              <Radio
                label={'Exibir relatório de gestão'}
                control={control}
                name={'management_report_show'}
                defaultValue={true}
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false },
                ]}
              />
              <Fieldset className={'md:col-span-2'}>
                <Disclosure
                  as={'div'}
                  className={'group relative flex flex-col gap-2'}
                  defaultOpen={true}
                >
                  <DisclosureButton
                    className={'cursor-pointer'}
                    as={SidebarItem}
                  >
                    <Legend>Filiais</Legend>
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
                    <CheckboxRemote
                      name={'branches'}
                      service={branchOptionsService}
                      control={control}
                      error={errors.branches?.message}
                    />
                  </DisclosurePanel>
                </Disclosure>
              </Fieldset>
            </div>
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
      </Content>
    </MainLayout>
  )
}
