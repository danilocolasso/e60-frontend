export interface Room {
  id: number
  name: string
  branch: {
    id: number
    name: string
  }
  valid_from: string
  valid_until: string
  min_participants: number
  max_participants: number
  duration_in_minutes: number
  is_multi_participants: boolean
  is_delivery: boolean
  is_active: boolean
}
