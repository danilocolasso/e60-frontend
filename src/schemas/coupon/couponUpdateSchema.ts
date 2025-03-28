import { CouponDiscountType } from '@/types/coupon-discount-type'
import { CouponUsageType } from '@/types/coupon-usage-type'
import { Weekday } from '@/types/weekday'
import { z } from 'zod'

export const couponUpdateSchema = z.object({
  id: z.number(),
  code: z.string().min(1),
  discount: z.coerce.number().positive(),
  discount_type: z.nativeEnum(CouponDiscountType),
  usage_type: z.nativeEnum(CouponUsageType),
  quantity: z.coerce.number().int().min(1).default(1).nullable().optional(),
  valid_until: z.coerce.date().nullable().optional(),
  start_time: z.string().nullable().optional(),
  end_time: z.string().nullable().optional(),
  partner_name: z.string().min(3),
  valid_days: z.array(z.nativeEnum(Weekday)),
  booking_start_date: z.coerce.date().nullable().optional(),
  booking_end_date: z.coerce.date().nullable().optional(),
  rooms: z.array(z.array(z.number()).optional()).transform(rooms => 
    Object.values(rooms)
      .flat()
      .filter(room => room !== null && room !== undefined)
  ),
})

export type CouponUpdatePayload = z.infer<typeof couponUpdateSchema>
