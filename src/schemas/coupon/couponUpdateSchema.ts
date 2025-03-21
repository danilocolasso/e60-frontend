import { z } from 'zod'

export const couponCreateSchema = z.object({
  id: z.number(),
  booking_id: z.number().nullable().optional(),
  branch_id: z.number().nullable().optional(),
  room_id: z.number().nullable().optional(),
  customer_id: z.number().nullable().optional(),
  code: z.string().min(1),
  discount: z.number().min(0).max(99.99).default(0),
  fixed_amount_per_person: z.number().min(0).default(0),
  valid_until: z.string().nullable().optional(),
  partner_name: z.string().min(1),
  start_time: z.string().min(1),
  end_time: z.string().min(1),
  is_valid_sunday: z.boolean().default(false),
  is_valid_monday: z.boolean().default(false),
  is_valid_tuesday: z.boolean().default(false),
  is_valid_wednesday: z.boolean().default(false),
  is_valid_thursday: z.boolean().default(false),
  is_valid_friday: z.boolean().default(false),
  is_valid_saturday: z.boolean().default(false),
  booking_start_date: z.string().nullable().optional(),
  booking_end_date: z.string().nullable().optional()
})

export type CouponCreatePayload = z.infer<typeof couponCreateSchema>
