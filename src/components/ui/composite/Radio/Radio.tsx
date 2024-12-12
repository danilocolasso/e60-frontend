import { Field, Label } from '@/components/ui/primitives/Fieldset'
import { RadioField, RadioGroup } from '@/components/ui/primitives/Radio'
import {
  Radio as RadioPrimitive,
  RadioProps as RadioPropsPrimitive,
} from '@/components/ui/primitives/Radio/Radio'
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form'

export interface LabelOption<T extends string = string> {
  label: string
  value: T
}

interface RadioProps<
  T extends string = string,
  F extends FieldValues = FieldValues,
> extends Omit<RadioPropsPrimitive, 'value' | 'onChange'> {
  label?: string
  name: Path<F>
  control: Control<F>
  values: LabelOption<T>[]
  defaultValue?: T
}

export const Radio = <
  T extends string = string,
  F extends FieldValues = FieldValues,
>({
  label,
  name,
  control,
  values,
  defaultValue,
  ...props
}: RadioProps<T, F>) => {
  return (
    <Field>
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={
          (defaultValue || values[0].value) as PathValue<F, Path<F>>
        }
        render={({ field }) => (
          <RadioGroup value={field.value} onChange={field.onChange} {...props}>
            {values.map((option: LabelOption<T>, index: number) => (
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
