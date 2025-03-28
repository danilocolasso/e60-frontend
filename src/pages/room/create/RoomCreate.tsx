import { Content } from '@/components/common/Content'
import { MainLayout } from '@/components/layouts/MainLayout'
import { Title } from '@/components/ui/primitives/Title'
import { FieldGroup, Fieldset, Legend } from '@/components/ui/primitives/Fieldset'
import { Button } from '@/components/ui/primitives/Button'
import { useRoomCreate } from '@/pages/room/create/useRoomCreate'
import { useNavigate } from 'react-router-dom'
import { SelectRemote } from '@/components/ui/composite/SelectRemote'
import { branchOptionsService } from '@/services/branch/branch-options.service'
import { Input } from '@/components/ui/composite/Input'
import { Checkbox } from '@/components/ui/composite/Checkbox'
import { Radio } from '@/components/ui/composite/Radio'
import { Textarea } from '@/components/ui/composite/Textarea/Textarea'

export const RoomCreate = () => {
  const navigate = useNavigate()
  const {
    register,
    control,
    handleSubmit,
    errors,
    loading,
  } = useRoomCreate()

  return (
    <MainLayout>
      <Title subtitle={'Criar'}>Salas</Title>
      <Content>
        <form id={'new-room'} onSubmit={handleSubmit}>
          <FieldGroup className={'md:px-16 md:py-8'}>
            <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
              <SelectRemote
                {...register('branch_id')}
                name={'branch_id'}
                label={'Filial'}
                service={branchOptionsService}
                error={errors.branch_id?.message}
              />
              <SelectRemote
                {...register('display_branch_id')}
                label={'Mostrar em'}
                service={branchOptionsService}
                error={errors.display_branch_id?.message}
              />
              <Fieldset className={'rounded-md border p-4 md:col-span-2 dark:border-white/10'}>
              <Legend>Nome</Legend>
                <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
                  <Input
                    label={'Português'}
                    error={errors.name?.message}
                    {...register('name')}
                  />
                  <Input
                    label={'Inglês'}
                    error={errors.name_en?.message}
                    {...register('name_en')}
                  />
                  <Input
                    label={'Espanhol'}
                    error={errors.name_es?.message}
                    {...register('name_es')}
                  />
                </div>
              </Fieldset>
              <Fieldset className={'rounded-md border p-4 md:col-span-2 dark:border-white/10'}>
                <Legend>Descrição</Legend>
                <div className={'flex flex-col gap-4'}>
                  <Textarea
                    label={'Português'}
                    rows={4}
                    error={errors.description?.message}
                    {...register('description')}
                  />
                  <Textarea
                    label={'Inglês'}
                    rows={4}
                    error={errors.description_en?.message}
                    {...register('description_en')}
                  />
                  <Textarea
                    label={'Espanhol'}
                    rows={4}
                    error={errors.description_es?.message}
                    {...register('description_es')}
                  />
                </div>
              </Fieldset>
              <Fieldset className={'rounded-md border p-4 md:col-span-2 dark:border-white/10'}>
                <Legend>Participantes</Legend>
                <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
                  <Input
                    label={'Mínimo'}
                    error={errors.min_participants?.message}
                    {...register('min_participants')}
                  />
                  <Input
                    label={'Máximo'}
                    error={errors.max_participants?.message}
                    {...register('max_participants')}
                  />
                  <Checkbox
                    label={'Multi-participante'}
                    name={'is_multi_participants'}
                    control={control}
                    error={errors.is_multi_participants?.message}
                  />
                </div>
              </Fieldset>
              <Fieldset className={'rounded-md border p-4 md:col-span-2 dark:border-white/10'}>
                <Legend>Validade</Legend>
                <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
                  <Input
                    type={'date'}
                    label={'De'}
                    error={errors.valid_from?.message}
                    {...register('valid_from')}
                  />
                  <Input
                    type={'date'}
                    label={'Até'}
                    error={errors.valid_until?.message}
                    {...register('valid_until')}
                  />
                </div>
              </Fieldset>
              <Input
                type={'number'}
                label={'Duração'}
                error={errors.duration_in_minutes?.message}
                {...register('duration_in_minutes')}
              />
              <Input
                label={'URL'}
                error={errors.url?.message}
                {...register('url')}
              />
              <Radio
                label={'Delivery'}
                name={'is_delivery'}
                control={control}
                options={[
                  { label: 'Sim', value: true },
                  { label: 'Não', value: false },
                ]}
                error={errors.is_delivery?.message}
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
            </div>
          </FieldGroup>
        </form>
        <div className={'flex justify-between'}>
          <Button onClick={() => navigate('/salas')}>
            Voltar
          </Button>
          <Button type={'submit'} form={'new-room'} disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </Content>
    </MainLayout>
  )
}
