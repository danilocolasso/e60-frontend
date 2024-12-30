import { MainLayout } from '@/components/layouts/MainLayout'
import { Input } from '@/components/ui/composite/Input'
import { Button } from '@/components/ui/primitives/Button'
import { Title } from '@/components/ui/primitives/Title'
import { useBranchEdit } from '@/pages/Branch/Edit/useBranchEdit'
import { useNavigate } from 'react-router-dom'

export const BranchEdit = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, errors } = useBranchEdit()

  return (
    <MainLayout>
      <Title subtitle={'Editar'}>Filiais</Title>
      <div className={'flex flex-1 flex-col justify-between gap-4'}>
        <form id={'edit-branch'} onSubmit={handleSubmit}>
          <Input
            label={'Nome'}
            error={errors.name?.message}
            {...register('name')}
          />
          {/*TODO*/}
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/administracao/filiais')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'edit-branch'}>
            Salvar
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
