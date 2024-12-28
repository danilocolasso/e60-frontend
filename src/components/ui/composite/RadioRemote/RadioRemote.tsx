import { Radio, RadioProps } from '@/components/ui/composite/Radio'
import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Option } from '@/types/Option'

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
  ...props
}: RadioRemoteProps<T, F>) => {
  const [options, setOptions] = useState<Option<T>[]>([])

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await service()
        setOptions(data)
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao buscar as opções do radio. Por favor, tente novamente mais tarde',
        )
      }
    }

    fetchOptions()
  }, [service])

  return <Radio {...props} options={options} />
}
