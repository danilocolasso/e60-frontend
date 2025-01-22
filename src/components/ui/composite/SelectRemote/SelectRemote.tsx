import {
  Select,
  SelectOptions,
  SelectProps,
} from '@/components/ui/composite/Select'
import { Field, Label } from '@/components/ui/primitives/Fieldset'
import { Option } from '@/types/option'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type ServiceType<T> = () => Promise<Option<T>[]>

export interface SelectRemoteProps<T extends string = string>
  extends Omit<SelectProps<T>, 'options'> {
  service: ServiceType<T>
}

const SelectRemoteInner = <T extends string = string>(
  { service, label, ...props }: SelectRemoteProps<T>,
  ref: ForwardedRef<HTMLSelectElement>,
) => {
  const [options, setOptions] = useState<SelectOptions<T>[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const data = await service()
        setOptions(data)
        setLoading(false)
      } catch (err) {
        toast.error(
          'An error occurred while fetching select options. Please try again later.',
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
