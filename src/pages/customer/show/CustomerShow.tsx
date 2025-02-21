import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Button } from '@/components/ui/primitives/Button'
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from '@/components/ui/primitives/DescriptionList'
import { Title } from '@/components/ui/primitives/Title'
import { useCustomerShow } from '@/pages/customer/show/useCustomerShow'
import { useNavigate } from 'react-router-dom'
import { dateFormat } from '@/util/dateFormat.ts'
import { Badge } from '@/components/ui/primitives/Badge'

export const CustomerShow = () => {
  const navigate = useNavigate()
  const { customer } = useCustomerShow()

  return (
    <MainLayout>
      <Title subtitle={'Visualizar'}>Clientes</Title>
      <Content>
        <DescriptionList>
          <DescriptionTerm>Nome</DescriptionTerm>
          <DescriptionDetails>{customer?.name}</DescriptionDetails>
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>{customer?.email}</DescriptionDetails>
          <DescriptionTerm>Telefone</DescriptionTerm>
          <DescriptionDetails>{customer?.phone}</DescriptionDetails>
          <DescriptionTerm>Celular</DescriptionTerm>
          <DescriptionDetails>{customer?.phone}</DescriptionDetails>
          <DescriptionTerm>Nascimento</DescriptionTerm>
          <DescriptionDetails>
            {dateFormat(customer?.birth_date)}
          </DescriptionDetails>
          <DescriptionTerm>Documento</DescriptionTerm>
          <DescriptionDetails>{customer?.document_number}</DescriptionDetails>
          <DescriptionTerm>Endereço</DescriptionTerm>
          <DescriptionDetails>
            {[customer?.street, customer?.street_number].join(', ')}
          </DescriptionDetails>
          <DescriptionTerm>Bairro</DescriptionTerm>
          <DescriptionDetails>{customer?.neighborhood}</DescriptionDetails>
          <DescriptionTerm>Cidade</DescriptionTerm>
          <DescriptionDetails>{customer?.city}</DescriptionDetails>
          <DescriptionTerm>Estado</DescriptionTerm>
          <DescriptionDetails>{customer?.state}</DescriptionDetails>
          <DescriptionTerm>CEP</DescriptionTerm>
          <DescriptionDetails>{customer?.zip_code}</DescriptionDetails>
          <DescriptionTerm>Corporativo</DescriptionTerm>
          <DescriptionDetails>
            {customer?.is_corporate ? (
              <Badge color={'green'}>Sim</Badge>
            ) : (
              <Badge color={'red'}>Não</Badge>
            )}
          </DescriptionDetails>
        </DescriptionList>
        <div className={'flex justify-between'}>
          <Button type={'button'} onClick={() => navigate('/clientes')}>
            Voltar
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
