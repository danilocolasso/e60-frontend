import { z } from 'zod'

export const roomCreateSchema = z.object({
  
})

export type RoomCreatePayload = z.infer<typeof roomCreateSchema>
