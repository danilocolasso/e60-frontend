import { Checkbox, CheckboxProps } from '@/components/ui/composite/Checkbox'
import { Field, Label } from '@/components/ui/primitives/Fieldset'
import { Option } from '@/types/option.ts'
import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'

type ServiceType<T> = () => Promise<Option<T>[]>

interface CheckboxRemoteProps<T, F extends FieldValues = FieldValues>
  extends Omit<CheckboxProps<T, F>, 'options'> {
  service: ServiceType<T>
}

export const CheckboxRemote = <T, F extends FieldValues = FieldValues>({
  service,
  label,
  ...props
}: CheckboxRemoteProps<T, F>) => {
  const [options, setOptions] = useState<Option<T>[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await service()
        setOptions(data)
        setLoading(false)
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao buscar as opções do checkbox. Por favor, tente novamente mais tarde',
        )
      }
    }

    fetchOptions()
  }, [service])

  if (loading) {
    return <Field>{label && <Label>{label}</Label>}</Field>
  }

  return <Checkbox label={label} {...props} options={options} />
}
