import { z } from 'zod'

export const branchCreateSchema = z.object({
  rps_id: z.coerce.number().int().optional(),
  admin_user_id: z.coerce.number().int().optional(),
  type: z.string(),
  state: z.string().optional(),
  rps_format: z.string(),
  rps_code_service: z.coerce.number().int().min(0),
  name: z.string(),
  phone: z.string().max(20).optional(),
  cnpj: z.string().length(18),
  address: z.string().min(1),
  zip_code: z.union([z.string().min(8).max(9), z.string().length(0)]).optional(),
  pagseguro: z.object({
    email: z.union([z.string().email(), z.string().length(0)]).optional(),
    token: z.string().optional(),
    key: z.string().optional(),
  }).optional(),
  paypal: z.object({
    user: z.string().optional(),
    password: z.string().optional(),
    signature: z.string().optional(),
  }).optional(),
  enotas: z.object({
    api_key: z.string().optional(),
    company_id: z.string().optional(),
  }).optional(),
  municipal_registration: z.coerce.number().int().min(0),
  rps_tax_service_invoice: z.string(),
  rps_special_tax_regime_invoice: z.string(),
  rps_simple_national_optant: z.string(),
  rps_federal_service_code: z.coerce.number().int().min(0),
  rps_municipal_service_code: z.coerce.number().int().min(0),
  rps_municipal_taxation_code: z.coerce.number().int().min(0),
  rps_item_list_service: z.coerce.number().int().min(0),
  rps_tax_rate: z.coerce.number().min(0),
  rps_last_number: z.coerce.number().int().min(0),
  giftcard_person_limit: z.coerce.number().int().min(1),
  giftcard_value_per_person: z.coerce.number().min(0),
  is_advance_voucher: z.boolean(),
  is_active: z.boolean(),
  proposal_text: z.string().optional(),
})

export type BranchCreatePayload = z.infer<typeof branchCreateSchema>
