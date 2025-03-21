import {
  CouponCreatePayload,
  couponCreateSchema,
} from '@/schemas/coupon/couponCreateSchema'
import { couponCreateService } from '@/services/coupon/coupon-create.service'
import { CouponUsageType } from '@/types/coupon-usage-type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useCouponCreate = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<CouponCreatePayload>({
    resolver: zodResolver(couponCreateSchema),
  })

  const usageType = useWatch({
    control,
    name: 'usage_type',
    defaultValue: CouponUsageType.UNIQUE,
  })

  const isQuantityDisabled = useMemo(() => {
    return usageType === CouponUsageType.UNLIMITED || usageType === CouponUsageType.UNIQUE
  }, [usageType])

  useEffect(() => {
    if (isQuantityDisabled) {
      setValue('quantity', undefined)
    }
  }, [isQuantityDisabled, setValue])

  const onSubmit = async (data: CouponCreatePayload) => {
    const id = toast.loading('Criando cupom...')
    try {
      setLoading(true)
      await couponCreateService(data)
      toast.update(id, {
        render: 'Cupom criado com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/cupons')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao criar o cupom. Por favor, tente novamente mais tarde',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    isQuantityDisabled,
  }
}
