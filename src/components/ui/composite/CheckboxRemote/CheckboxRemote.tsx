import { Checkbox, CheckboxProps } from '@/components/ui/composite/Checkbox'
import { Option } from '@/types/Option'
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
  ...props
}: CheckboxRemoteProps<T, F>) => {
  const [options, setOptions] = useState<Option<T>[]>([])

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await service()
        setOptions(data)
      } catch (err) {
        toast.error(
          'Ocorreu um erro ao buscar as opções do checkbox. Por favor, tente novamente mais tarde',
        )
      }
    }

    fetchOptions()
  }, [service])

  return <Checkbox {...props} options={options} />
}
