import { z } from 'zod'

export const roomUpdateSchema = z.object({
  id: z.number(),
})

export type RoomUpdatePayload = z.infer<typeof roomUpdateSchema>
