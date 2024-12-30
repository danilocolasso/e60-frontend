import { Field, Label } from '@/components/ui/primitives/Fieldset'
import { RadioField, RadioGroup } from '@/components/ui/primitives/Radio'
import {
  Radio as RadioPrimitive,
  RadioProps as RadioPropsPrimitive,
} from '@/components/ui/primitives/Radio/Radio'
import { Option } from '@/types/Option.ts'
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'

export interface RadioProps<
  T extends string = string,
  F extends FieldValues = FieldValues,
> extends Omit<RadioPropsPrimitive, 'value' | 'onChange'> {
  label?: string
  name: Path<F>
  control: Control<F>
  options: Option<T>[]
  defaultValue?: T
}

export const Radio = <
  T extends string = string,
  F extends FieldValues = FieldValues,
>({
  label,
  name,
  control,
  options,
  defaultValue,
  ...props
}: RadioProps<T, F>) => {
  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue as PathValue<F, Path<F>>}
        render={({ field }) => (
          <RadioGroup
            value={String(field.value)}
            onChange={field.onChange}
            {...props}
          >
            {options.map((option: Option<T>, index: number) => (
              <RadioField key={option.value + '-' + index}>
                <RadioPrimitive
                  value={option.value}
                  onChange={() => field.onChange(option.value)}
                />
                <Label>{option.label}</Label>
              </RadioField>
            ))}
          </RadioGroup>
        )}
      />
    </Field>
  )
}
