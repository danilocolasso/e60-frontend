import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { branchShowService } from '@/services/branch/branch-show.service'
import { Branch } from '@/types/Branch'

export const useBranchShow = () => {
  const { id } = useParams()
  const [branch, setBranch] = useState<Branch | null>(null)

  const fetch = async () => {
    try {
      const data = await branchShowService({
        id: Number(id)
      })
      setBranch(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar a filial. Por favor, tente novamente mais tarde'
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    branch,
  }
}