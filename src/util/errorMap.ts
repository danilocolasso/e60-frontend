import ptBR from '@/locales/pt-br.json'
import {
  ZodErrorMap,
  ZodInvalidStringIssue,
  ZodInvalidTypeIssue,
  ZodIssueCode,
  ZodTooBigIssue,
  ZodTooSmallIssue,
} from 'zod'

function replaceAll(
  template: string,
  replacements: Record<string, string>,
): string {
  let result = template
  for (const [key, value] of Object.entries(replacements)) {
    // Handle both {{key}} and {{- key}}
    result = result.replace(`{{${key}}}`, value)
    result = result.replace(`{{- ${key}}}`, value)
  }
  return result
}

export const errorMap: ZodErrorMap = (issue, _ctx) => {
  const { errors } = ptBR

  switch (issue.code) {
    case ZodIssueCode.invalid_type: {
      const invalidTypeIssue = issue as ZodInvalidTypeIssue
      if (
        invalidTypeIssue.received === 'undefined' &&
        'invalid_type_received_undefined' in errors
      ) {
        return { message: errors.invalid_type_received_undefined }
      }
      if (
        invalidTypeIssue.received === 'null' &&
        'invalid_type_received_null' in errors
      ) {
        return { message: errors.invalid_type_received_null }
      }
      return {
        message: replaceAll(errors.invalid_type, {
          expected: String(invalidTypeIssue.expected),
          received: String(invalidTypeIssue.received),
        }),
      }
    }

    case ZodIssueCode.invalid_literal:
      return {
        message: replaceAll(errors.invalid_literal, {
          expected: JSON.stringify(issue.expected),
        }),
      }
    case ZodIssueCode.unrecognized_keys:
      return {
        message: replaceAll(errors.unrecognized_keys, {
          keys: issue.keys.join(', '),
        }),
      }
    case ZodIssueCode.invalid_union:
      return { message: errors.invalid_union }
    case ZodIssueCode.invalid_union_discriminator:
      return {
        message: replaceAll(errors.invalid_union_discriminator, {
          options: issue.options.join(', '),
        }),
      }
    case ZodIssueCode.invalid_enum_value:
      return {
        message: replaceAll(errors.invalid_enum_value, {
          options: issue.options.map((opt) => JSON.stringify(opt)).join(', '),
          received: String(issue.received),
        }),
      }
    case ZodIssueCode.invalid_arguments:
      return { message: errors.invalid_arguments }
    case ZodIssueCode.invalid_return_type:
      return { message: errors.invalid_return_type }
    case ZodIssueCode.invalid_date:
      return { message: errors.invalid_date }
    case ZodIssueCode.custom:
      return { message: errors.custom }
    case ZodIssueCode.invalid_intersection_types:
      return { message: errors.invalid_intersection_types }
    case ZodIssueCode.not_multiple_of:
      return {
        message: replaceAll(errors.not_multiple_of, {
          multipleOf: String(issue.multipleOf),
        }),
      }
    case ZodIssueCode.not_finite:
      return { message: errors.not_finite }
    case ZodIssueCode.invalid_string: {
      const stringIssue = issue as ZodInvalidStringIssue
      const { validation } = stringIssue

      if (typeof validation === 'string') {
        // Check if validation key exists in invalid_string
        if (validation in errors.invalid_string) {
          const template =
            errors.invalid_string[
              validation as keyof typeof errors.invalid_string
            ]
          return { message: replaceAll(template, { validation }) }
        } else {
          // If no matching key, fallback
          return { message: errors.invalid_string.regex }
        }
      }

      if (typeof validation === 'object') {
        // startsWith / endsWith checks
        if (
          'startsWith' in validation &&
          'startsWith' in errors.invalid_string
        ) {
          const template = errors.invalid_string.startsWith
          return {
            message: replaceAll(template, {
              startsWith: String(validation.startsWith),
            }),
          }
        }
        if ('endsWith' in validation && 'endsWith' in errors.invalid_string) {
          const template = errors.invalid_string.endsWith
          return {
            message: replaceAll(template, {
              endsWith: String(validation.endsWith),
            }),
          }
        }
      }

      // Fallback if none matched
      return { message: errors.invalid_string.regex }
    }

    case ZodIssueCode.too_small: {
      const tooSmallIssue = issue as ZodTooSmallIssue
      const { minimum, inclusive, exact, type } = tooSmallIssue
      let variant = inclusive ? 'inclusive' : 'not_inclusive'
      if (exact) variant = 'exact'

      // Check if type is supported
      if (type in errors.too_small) {
        const category = errors.too_small[type as keyof typeof errors.too_small]
        if (variant in category) {
          const template = category[variant as keyof typeof category]
          return {
            message: replaceAll(template, {
              minimum: String(minimum),
            }),
          }
        }
      }
      // If no category or variant found, fallback
      return { message: errors.custom }
    }

    case ZodIssueCode.too_big: {
      const tooBigIssue = issue as ZodTooBigIssue
      const { maximum, inclusive, exact, type } = tooBigIssue
      let variant = inclusive ? 'inclusive' : 'not_inclusive'
      if (exact) variant = 'exact'

      // Check if type is supported
      if (type in errors.too_big) {
        const category = errors.too_big[type as keyof typeof errors.too_big]
        if (variant in category) {
          const template = category[variant as keyof typeof category]
          return {
            message: replaceAll(template, {
              maximum: String(maximum),
            }),
          }
        }
      }

      // If no category or variant found, fallback
      return { message: errors.custom }
    }

    default:
      return { message: 'Erro de validação.' }
  }
}
