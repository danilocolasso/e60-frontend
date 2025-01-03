import { MainLayout } from '@/components/layouts/MainLayout'
import { Button } from '@/components/ui/primitives/Button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/primitives/DescriptionList'
import { Title } from '@/components/ui/primitives/Title'
import { useBranchShow } from '@/pages/branch/show/useBranchShow'
import { dateTimeFormat } from '@/util/dateTimeFormat'
import { useNavigate } from 'react-router-dom'

export const BranchShow = () => {
  const navigate = useNavigate()
  const { branch } = useBranchShow()

  return (
    <MainLayout>
      <Title subtitle={'Visualizar'}>Filiais</Title>
      <div className={'flex flex-1 flex-col justify-between'}>
        <DescriptionList>
          <DescriptionTerm>Nome</DescriptionTerm>
          <DescriptionDetails>{branch?.name}</DescriptionDetails>
          {/*TODO*/}
          <DescriptionTerm>Criado em</DescriptionTerm>
          <DescriptionDetails>
            {branch?.created_at && dateTimeFormat(branch.created_at)}
          </DescriptionDetails>
        </DescriptionList>
        <div className={'flex justify-between'}>
          <Button
            type={'button'}
            onClick={() => navigate('/administracao/filiais')}
          >
            Voltar
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}
