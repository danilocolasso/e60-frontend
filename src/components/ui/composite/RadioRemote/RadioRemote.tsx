import { Radio, RadioProps } from '@/components/ui/composite/Radio'
import { Field, Label } from '@/components/ui/primitives/Fieldset'
import { Option } from '@/types/option.ts'
import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'

type ServiceType<T extends string> = () => Promise<Option<T>[]>

interface RadioRemoteProps<
  T extends string,
  F extends FieldValues = FieldValues,
> extends Omit<RadioProps<T, F>, 'options'> {
  service: ServiceType<T>
}

export const RadioRemote = <
  T extends string,
  F extends FieldValues = FieldValues,
>({
  service,
  label,
  ...props
}: RadioRemoteProps<T, F>) => {
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
          'Ocorreu um erro ao buscar as opções do radio. Por favor, tente novamente mais tarde',
        )
      }
    }

    fetchOptions()
  }, [service])

  if (loading) {
    return <Field>{label && <Label>{label}</Label>}</Field>
  }

  return <Radio label={label} {...props} options={options} />
}
