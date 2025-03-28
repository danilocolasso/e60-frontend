import {
  Checkbox as CheckboxPrimitive,
  CheckboxField,
  CheckboxGroup,
} from '@/components/ui/primitives/Checkbox'
import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { Option } from '@/types/option.ts'
import clsx from 'clsx'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

export interface CheckboxProps<T, F extends FieldValues = FieldValues> {
  label?: string
  name: Path<F>
  control: Control<F>
  options?: Option<T>[]
  error?: string
  align?: 'horizontal' | 'vertical'
}

const toggleValue = <T,>(selectedValues: T[], val: T): T[] =>
  selectedValues.includes(val)
    ? selectedValues.filter((item) => item !== val)
    : [...selectedValues, val]

export const Checkbox = <T, F extends FieldValues = FieldValues>({
  label,
  name,
  control,
  options,
  error,
  align = 'vertical',
}: CheckboxProps<T, F>) => {
  return (
    <Field>
      {options && label && <Label>{label}</Label>}
      {error && <ErrorMessage className='mb-2'>{error}</ErrorMessage>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValues: T[] = field.value || []
          return (
            <CheckboxGroup
              className={clsx(
              'flex',
              align === 'horizontal' ? 'flex-row gap-4 items-start' : 'flex-col',
            )}
            >
              {options ? (
                options.map((option: Option<T>, index: number) => {
                  const isChecked = selectedValues.includes(option.value)
                  return (
                    <CheckboxField key={option.value + '-' + index} style={align === 'horizontal' ? { marginTop: '0px' } : {}}>
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
                })
              ) : (
                <CheckboxField key={field.name} className={'!gap-x-2'}>
                  <CheckboxPrimitive
                    checked={field.value || false}
                    onChange={() => field.onChange(!field.value)}
                  />
                  {label && <Label>{label}</Label>}
                </CheckboxField>
              )}
            </CheckboxGroup>
          )
        }}
      />
    </Field>
  )
}
