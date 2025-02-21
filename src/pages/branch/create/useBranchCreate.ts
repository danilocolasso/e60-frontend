import {
  BranchCreatePayload,
  branchCreateSchema,
} from '@/schemas/branch/branchCreateSchema'
import { branchCreateService } from '@/services/branch/branch-create.service.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'

export const useBranchCreate = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BranchCreatePayload>({
    resolver: zodResolver(branchCreateSchema),
    defaultValues: {
      giftcard_person_limit: 1,
      giftcard_value_per_person: 0,
    }
  })

  const onSubmit = async (data: BranchCreatePayload) => {
    const id = toast.loading('Criando filial...')
    try {
      setLoading(true)
      await branchCreateService(data)
      toast.update(id, {
        render: 'Filial criada com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/administracao/filiais')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao criar a filial. Por favor, tente novamente mais tarde',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  console.log(errors)

  return {
    register,
    control,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
  }
}
