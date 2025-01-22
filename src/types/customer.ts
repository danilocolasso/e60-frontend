import { CustomerContact } from '@/types/customer-contact'

export interface Customer {
  id: number
  name: string
  document_number: string
  birth_date: Date | null
  street: string
  street_number: string
  neighborhood: string
  zip_code: string
  complement: string
  city: string
  state: string
  email: string
  username: string
  password: string
  phone: string
  newsletter: boolean
  is_corporate: boolean
  image_url: string
  rd_station_data: string
  contacts: CustomerContact[]
}
