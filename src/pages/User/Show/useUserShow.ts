import { userShowService } from '@/services/user/user-show.service.ts'
import { User } from '@/types/User.ts'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useUserShow = () => {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)

  const fetch = async () => {
    try {
      const data = await userShowService({
        id: Number(id),
      })
      setUser(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o usuário. Por favor, tente novamente mais tarde',
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    user,
  }
}
