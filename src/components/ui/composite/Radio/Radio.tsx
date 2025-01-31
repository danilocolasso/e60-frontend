import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { RadioField, RadioGroup } from '@/components/ui/primitives/Radio'
import {
  Radio as RadioPrimitive,
  RadioProps as RadioPropsPrimitive,
} from '@/components/ui/primitives/Radio/Radio'
import { Option } from '@/types/option.ts'
import clsx from 'clsx'
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'

export interface RadioProps<
  T extends string | number | boolean = string,
  F extends FieldValues = FieldValues,
> extends Omit<RadioPropsPrimitive, 'value' | 'onChange' | 'defaultValue'> {
  label?: string
  name: Path<F>
  control: Control<F>
  options: Option<T>[]
  defaultValue?: T
  error?: string
  align?: 'horizontal' | 'vertical'
}

export const Radio = <
  T extends string | number | boolean = string,
  F extends FieldValues = FieldValues,
>({
  label,
  name,
  control,
  options,
  defaultValue,
  className,
  error,
  align = 'horizontal',
  ...props
}: RadioProps<T, F>) => {
  const valueMap = new Map<string, T>(
    options.map((option) => [String(option.value), option.value]),
  )

  const serializedDefaultValue = defaultValue ?? options[0]?.value

  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={serializedDefaultValue as PathValue<F, Path<F>>}
        render={({ field }) => {
          const serializedValue =
            field.value !== undefined ? String(field.value) : ''

          const handleChange = (value: string) => {
            const newValue = valueMap.get(value)
            if (newValue !== undefined) {
              field.onChange(newValue)
            }
          }

          return (
            <>
              <RadioGroup
                value={serializedValue}
                onChange={handleChange}
                className={clsx(
                  className,
                  'flex',
                  align === 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2',
                )}
                {...props}
              >
                {options.map((option: Option<T>, index: number) => (
                  <RadioField
                    key={`${option.value}-${index}`}
                    className={'!mt-0 !gap-2'}
                  >
                    <RadioPrimitive value={String(option.value)} />
                    <Label>{option.label}</Label>
                  </RadioField>
                ))}
              </RadioGroup>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </>
          )
        }}
      />
    </Field>
  )
}
