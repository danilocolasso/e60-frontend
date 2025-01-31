import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { Select as SelectPrimitive } from '@/components/ui/primitives/Select'
import { Option } from '@/types/option'
import React from 'react'

export interface SelectProps<T extends string = string>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option<T>[]
  label?: string
  error?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, value, onChange, defaultValue, className, ...props }, ref) => {
    return (
      <Field className={className}>
        {label && <Label>{label}</Label>}
        <SelectPrimitive value={value} onChange={onChange} ref={ref} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectPrimitive>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Field>
    )
  },
)
