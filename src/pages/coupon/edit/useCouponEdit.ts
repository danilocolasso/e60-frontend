import {
  CouponUpdatePayload,
  couponUpdateSchema,
} from '@/schemas/coupon/couponUpdateSchema'
import { couponEditService } from '@/services/coupon/coupon-edit.service'
import { couponUpdateService } from '@/services/coupon/coupon-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useMemo, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Weekday } from '@/types/weekday'
import { CouponUsageType } from '@/types/coupon-usage-type'
import { Rooms } from '../create/useRoomSelection'
import { Room } from '@/types/room'

export const useCouponEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [loadedBranchIds, setLoadedBranchIds] = useState<number[]>([])

  const arrangeRooms = (rooms: Room[]): number[][] => {
    const result: number[][] = [];

    rooms?.map((room) => {
      if (!result[room.branch.id]) {
        result[room.branch.id] = [];
      }
      result[room.branch.id].push(room.id);
    });

    return result;
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CouponUpdatePayload & Rooms>({
    resolver: zodResolver(couponUpdateSchema),
  })

  const usageType = useWatch({
    control,
    name: 'usage_type',
    defaultValue: CouponUsageType.UNIQUE,
  })

  const isQuantityDisabled = useMemo(() => {
    return usageType === CouponUsageType.UNLIMITED || usageType === CouponUsageType.UNIQUE
  }, [usageType])

  const fetch = async () => {
    try {
      const data = await couponEditService({ id: Number(id) })

      setLoadedBranchIds(data.rooms.map((room) => room.branch.id))

      reset({
        ...data,
        valid_days: Object.entries(data.valid_days)
          .filter(([_, value]) => value)
          .map(([key]) => key as Weekday),
        rooms: arrangeRooms(data.rooms) as any,
      })
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
    loadedBranchIds,
    isQuantityDisabled,
  }
}
