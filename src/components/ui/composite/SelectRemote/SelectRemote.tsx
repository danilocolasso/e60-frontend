import { Select, SelectProps } from '@/components/ui/composite/Select'
import { Field, Label } from '@/components/ui/primitives/Fieldset'
import { Option } from '@/types/option'
import { handleApiError } from '@/util/apiErrorHandler'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'

type ServiceType<T> = () => Promise<Option<T>[]>

export interface SelectRemoteProps<T extends string = string>
  extends Omit<SelectProps<T>, 'options'> {
  service: ServiceType<T>
  emptyOption?: boolean
}

const SelectRemoteInner = <T extends string = string>(
  { service, label, emptyOption, ...props }: SelectRemoteProps<T>,
  ref: ForwardedRef<HTMLSelectElement>,
) => {
  const [options, setOptions] = useState<Option<T>[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await service()
        if (emptyOption) {
          data.unshift({ label: 'Selecione', value: '' as T })
        }
        setOptions(data)
        setLoading(false)
      } catch (err: any) {
        handleApiError(
          err,
          'Ocorreu um erro ao buscar as opções do select. Por favor, tente novamente mais tarde',
        )
      }
    }

    fetchOptions()
  }, [service])

  if (loading) {
    return <Field>{label && <Label>{label}</Label>}</Field>
  }

  return <Select {...props} label={label} options={options} ref={ref} />
}

export const SelectRemote = forwardRef(SelectRemoteInner) as <
  T extends string = string,
>(
  props: SelectRemoteProps<T> & { ref?: ForwardedRef<HTMLSelectElement> },
) => ReturnType<typeof SelectRemoteInner>
