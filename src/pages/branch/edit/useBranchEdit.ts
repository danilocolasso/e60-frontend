import {
  BranchUpdatePayload,
  branchUpdateSchema,
} from '@/schemas/branch/branchUpdateSchema'
import { branchEditService } from '@/services/branch/branch-edit.service'
import { branchUpdateService } from '@/services/branch/branch-update.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useBranchEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<BranchUpdatePayload>({
    resolver: zodResolver(branchUpdateSchema),
  })

  const fetch = async () => {
    try {
      const data = await branchEditService({ id: Number(id) })
      reset({
        ...data,
        rps_id: data.rps?.id,
        admin_user_id: data.admin?.id,
      })
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar a filial. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [reset])

  const onSubmit = async (data: BranchUpdatePayload) => {
    const id = toast.loading('Salvando...')
    try {
      setLoading(true)
      await branchUpdateService(data)
      toast.update(id, {
        render: 'Filial atualizada com sucesso',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
      })
      navigate('/administracao/filiais')
    } catch (error: any) {
      toast.update(id, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao atualizar a filial. Por favor, tente novamente mais tarde',
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
