import { Input, InputProps } from '@/components/ui/composite/Input/Input.tsx'
import { InputGroup } from '@/components/ui/primitives/Input'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

interface InputSearchProps extends InputProps {}

export const InputSearch = (props: InputSearchProps) => {
  return (
    <InputGroup>
      <MagnifyingGlassIcon />
      <Input placeholder={'Buscar...'} {...props} />
    </InputGroup>
  )
}
