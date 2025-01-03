import { MainLayout } from '@/components/layouts/MainLayout.tsx'
import { Input } from '@/components/ui/composite/Input'
import { Button } from '@/components/ui/primitives/Button'
import { FieldGroup } from '@/components/ui/primitives/Fieldset'
import { Title } from '@/components/ui/primitives/Title'
import { useBranchCreate } from '@/pages/branch/create/useBranchCreate.ts'
import { useNavigate } from 'react-router-dom'

export const BranchCreate = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, errors } = useBranchCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Filiais</Title>
      <div className={'flex flex-1 flex-col justify-between gap-4'}>
        <form id={'new-branch'} onSubmit={handleSubmit}>
          <FieldGroup className={'max-w-4xl'}>
            <Input
              label={'Nome'}
              error={errors.name?.message}
              {...register('name')}
            />
            {/*TODO*/}
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/administracao/filiais')}>
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
