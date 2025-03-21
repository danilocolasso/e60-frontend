import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { couponShowService } from '@/services/coupon/coupon-show.service'
import { Coupon } from '@/types/coupon'

export const useCouponShow = () => {
  const { id } = useParams()
  const [coupon, setCoupon] = useState<Coupon | null>(null)

  const fetch = async () => {
    try {
      const data = await couponShowService({
        id: Number(id)
      })
      setCoupon(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o cupom. Por favor, tente novamente mais tarde'
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    coupon,
  }
}