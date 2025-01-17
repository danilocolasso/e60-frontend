import { Input, InputProps } from '@/components/ui/composite/Input/Input.tsx'
import React from 'react'

interface InputDateProps extends InputProps {}

export const InputDate = React.forwardRef<HTMLInputElement, InputDateProps>(
  ({ ...props }, ref) => {
    return <Input type="date" {...props} ref={ref} />
  },
)
