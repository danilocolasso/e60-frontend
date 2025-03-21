import {
  CouponUpdatePayload,
  couponUpdateSchema,
} from '@/schemas/coupon/couponUpdateSchema'
import { couponEditService } from '@/services/coupon/coupon-edit.service'
import { couponUpdateService } from '@/services/coupon/coupon-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useCouponEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CouponUpdatePayload>({
    resolver: zodResolver(couponUpdateSchema),
  })

  const fetch = async () => {
    try {
      const data = await couponEditService({ id: Number(id) })
      reset(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o cupom. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [reset])

  const onSubmit = async (data: CouponUpdatePayload) => {
    const id = toast.loading('Salvando...')
    try {
      setLoading(true)
      await couponUpdateService(data)
      toast.update(id, {
        render: 'Cupom atualizado com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/cupons')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao atualizar o cupom. Por favor, tente novamente mais tarde',
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
  }
}
