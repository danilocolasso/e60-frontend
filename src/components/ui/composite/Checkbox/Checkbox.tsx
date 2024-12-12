import {
  Checkbox as CheckboxPrimitive,
  CheckboxField,
  CheckboxGroup,
} from '@/components/ui/primitives/Checkbox'
import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

export interface CheckboxOption<T> {
  label: string
  value: T
}

interface CheckboxProps<T, F extends FieldValues = FieldValues> {
  label?: string
  name: Path<F>
  control: Control<F>
  values: CheckboxOption<T>[]
  error?: string
}

const toggleValue = <T,>(selectedValues: T[], val: T): T[] =>
  selectedValues.includes(val)
    ? selectedValues.filter((item) => item !== val)
    : [...selectedValues, val]

export const Checkbox = <T, F extends FieldValues = FieldValues>({
  label,
  name,
  control,
  values,
  error,
}: CheckboxProps<T, F>) => {
  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValues: T[] = field.value || []
          return (
            <CheckboxGroup>
              {values.map((option: CheckboxOption<T>, index: number) => {
                const isChecked = selectedValues.includes(option.value)
                return (
                  <CheckboxField key={option.value + '-' + index}>
                    <CheckboxPrimitive
                      checked={isChecked}
                      onChange={() =>
                        field.onChange(
                          toggleValue(selectedValues, option.value),
                        )
                      }
                    />
                    <Label>{option.label}</Label>
                  </CheckboxField>
                )
              })}
            </CheckboxGroup>
          )
        }}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Field>
  )
}
