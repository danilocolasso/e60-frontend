import { z } from 'zod'

export const roomCreateSchema = z.object({
  name: z.string().min(1),
  name_en: z.string(),
  name_es: z.string(),
  image_url: z.string().optional(),
  cover_url: z.string().optional(),
  icon_url: z.string().optional(),
  description: z.string().min(1),
  description_en: z.string(),
  description_es: z.string(),
  min_participants: z.coerce.number().int().min(1),
  max_participants: z.coerce.number().int().min(1),
  duration_in_minutes: z.coerce.number().min(1),
  branch_id: z.coerce.number().int(),
  display_branch_id: z.coerce.number().int(),
  valid_from: z.coerce.date(),
  valid_until: z.coerce.date(),
  url: z.string(),
  is_multi_participants: z.boolean().optional(),
  is_delivery: z.boolean(),
  is_active: z.boolean(),
})

export type RoomCreatePayload = z.infer<typeof roomCreateSchema>
