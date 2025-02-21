import { useConsultDocumentNumber } from '@/hooks/useConsultDocumentNumber.ts'
import {
  CustomerCreatePayload,
  customerCreateSchema,
} from '@/schemas/customer/customerCreateSchema'
import { customerCreateService } from '@/services/customer/customer-create.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'

export const useCustomerCreate = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<CustomerCreatePayload>({
    resolver: zodResolver(customerCreateSchema),
  })

  const { consultDocument } = useConsultDocumentNumber<CustomerCreatePayload>({
    getValues,
    setValue,
  })

  const onSubmit = async (data: CustomerCreatePayload) => {
    const id = toast.loading('Criando cliente...')
    try {
      setLoading(true)
      await customerCreateService(data)
      toast.update(id, {
        render: 'Cliente criado com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/clientes')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao criar o cliente. Por favor, tente novamente mais tarde',
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
