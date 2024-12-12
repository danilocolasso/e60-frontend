import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { Input as InputPrimitive } from '@/components/ui/primitives/Input'
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <Field className={className}>
        {label && <Label>{label}</Label>}
        <InputPrimitive ref={ref} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Field>
    )
  },
)
