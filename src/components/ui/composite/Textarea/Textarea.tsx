import { ErrorMessage, Field, Label } from '@/components/ui/primitives/Fieldset'
import { Textarea as TextareaPrimitive } from '@/components/ui/primitives/Textarea'
import React from 'react'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <Field className={className}>
        {label && <Label>{label}</Label>}
        <TextareaPrimitive {...props} ref={ref} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Field>
    )
  },
)
