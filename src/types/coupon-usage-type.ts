export enum CouponUsageType {
  UNIQUE = 'unique',
  UNIQUE_PER_CUSTOMER = 'unique_per_customer',
  LIMITED = 'limited',
  UNLIMITED = 'unlimited',
}

export const CouponUsageTypeLabels = {
  [CouponUsageType.UNIQUE]: 'Único',
  [CouponUsageType.UNIQUE_PER_CUSTOMER]: 'Único por cliente',
  [CouponUsageType.LIMITED]: 'Limitado',
  [CouponUsageType.UNLIMITED]: 'Ilimitado',
} as const
