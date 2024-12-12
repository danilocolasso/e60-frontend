export interface PaginatedPayload {
  current_page: number
  per_page: number
  query?: string
  sort?: string
  order?: 'asc' | 'desc'
}
