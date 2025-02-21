import { useConsultDocumentNumber } from '@/hooks/useConsultDocumentNumber'
import {
  CustomerUpdatePayload,
  customerUpdateSchema,
} from '@/schemas/customer/customerUpdateSchema'
import { customerEditService } from '@/services/customer/customer-edit.service'
import { customerUpdateService } from '@/services/customer/customer-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useCustomerEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm<CustomerUpdatePayload>({
    resolver: zodResolver(customerUpdateSchema),
  })

  const { consultDocument } = useConsultDocumentNumber<CustomerUpdatePayload>({
    getValues,
    setValue,
  })

  const fetch = async () => {
    try {
      const data = await customerEditService({ id: Number(id) })
      reset(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o cliente. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [reset])

  const onSubmit = async (data: CustomerUpdatePayload) => {
    const id = toast.loading('Salvando...')
    try {
      setLoading(true)
      await customerUpdateService(data)
      toast.update(id, {
        render: 'Cliente atualizado com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/clientes')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao atualizar o cliente. Por favor, tente novamente mais tarde',
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
    consultDocument,
  }
}
