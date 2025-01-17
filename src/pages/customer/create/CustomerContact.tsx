import { Input } from '@/components/ui/composite/Input'
import { Button } from '@/components/ui/primitives/Button'
import { Text } from '@/components/ui/primitives/Text'
import { CustomerCreatePayload } from '@/schemas/customer/customerCreateSchema.ts'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface CustomerContactProps {
  index: number
  register: UseFormRegister<CustomerCreatePayload>
  errors: FieldErrors<CustomerCreatePayload>
  remove: (index: number) => void
}

export const CustomerContact: React.FC<CustomerContactProps> = ({
  index,
  register,
  errors,
  remove,
}) => {
  return (
    <div
      className={
        'flex flex-col gap-2 rounded-lg border border-zinc-950/10 p-4 dark:border-white/10'
      }
    >
      <div className={'flex justify-between'}>
        <Text>#{index + 1}</Text>
        <Button className={'self-end'} onClick={() => remove(index)}>
          Remover
        </Button>
      </div>
      <div className={'grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4'}>
        <Input
          label={'Nome'}
          {...register(`contacts.${index}.name` as const)}
          error={errors.contacts?.[index]?.name?.message}
        />
        <Input
          label={'Email'}
          {...register(`contacts.${index}.email` as const)}
          error={errors.contacts?.[index]?.email?.message}
        />
        <Input
          label={'Telefone'}
          {...register(`contacts.${index}.phone` as const)}
          error={errors.contacts?.[index]?.phone?.message}
        />
      </div>
    </div>
  )
}
