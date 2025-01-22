import { Input } from '@/components/ui/composite/Input'
import { Button } from '@/components/ui/primitives/Button'
import { Text } from '@/components/ui/primitives/Text'
import { CustomerContact as Contact } from '@/types/customer-contact'
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form'

interface CustomerContactProps<T extends FieldValues> {
  index: number
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  remove: (index: number) => void
}

export function CustomerContact<T extends FieldValues>({
  index,
  register,
  errors,
  remove,
}: CustomerContactProps<T>) {
  const contactErrors = errors.contacts as FieldErrors<Contact>[] | undefined

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
      <div className={'grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4'}>
        <Input
          label={'Nome'}
          {...register(`contacts.${index}.name` as Path<T>)}
          error={contactErrors?.[index]?.name?.message}
        />
        <Input
          label={'Departamento'}
          {...register(`contacts.${index}.department` as Path<T>)}
          error={contactErrors?.[index]?.department?.message}
        />
        <Input
          label={'Email'}
          {...register(`contacts.${index}.email` as Path<T>)}
          error={contactErrors?.[index]?.email?.message}
        />
        <Input
          label={'Telefone'}
          {...register(`contacts.${index}.phone` as Path<T>)}
          error={contactErrors?.[index]?.phone?.message}
        />
      </div>
    </div>
  )
}
