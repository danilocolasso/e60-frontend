import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { Select as SelectPrimitive } from '@/components/ui/primitives/Select'
import React from 'react'

export interface SelectOptions<T extends string = string> {
  label: string
  value: T
}

export interface SelectProps<T extends string = string>
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions<T>[]
  label?: string
  error?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, value, onChange, defaultValue, ...props }, ref) => {
    return (
      <Field>
        {label && <Label>{label}</Label>}
        <SelectPrimitive
          value={value} // <--- controlled usage
          onChange={onChange} // <--- controlled usage
          ref={ref}
          {...props}
        >
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
