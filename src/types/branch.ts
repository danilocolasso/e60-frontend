export interface Branch {
  id: number
  rps?: {
    id: number
    name: string
  }
  admin?: {
    id: number
    name: string
  }
  type: string
  name: string
  phone?: string
  state?: string
  pagseguro?: {
    email?: string
    token?: string
    key?: string
  }
  paypal?: {
    user?: string
    password?: string
    signature?: string
  }
  rps_format?: string
  municipal_registration?: string
  cnpj?: string
  rps_last_number?: number
  rps_municipal_service_code?: string
  rps_tax_service_invoice?: string
  rps_special_tax_regime_invoice?: string
  rps_simple_national_optant?: string
  rps_federal_service_code?: string
  rps_tax_rate?: number
  rps_code_service?: string
  rps_item_list_service?: string
  rps_municipal_taxation_code?: string
  giftcard_value_per_person?: number
  giftcard_person_limit?: number
  is_advance_voucher?: boolean
  street?: string
  street_number?: string
  complement?: string
  neighborhood?: string
  city?: string
  zip_code?: string
  proposal_text?: string
  enotas?: {
    api_key?: string
    company_id?: string
  }
  is_active: boolean
}
