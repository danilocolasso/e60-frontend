import {
  CustomerUpdatePayload,
  customerUpdateSchema,
} from '@/schemas/customer/customerUpdateSchema'
import { customerEditService } from '@/services/customer/customer-edit.service'
import { customerUpdateService } from '@/services/customer/customer-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useCustomerEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<CustomerUpdatePayload>({
    resolver: zodResolver(customerUpdateSchema),
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
    }
  }

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  }
}
