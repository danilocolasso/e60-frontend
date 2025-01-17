import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { customerShowService } from '@/services/customer/customer-show.service'
import { Customer } from '@/types/customer'

export const useCustomerShow = () => {
  const { id } = useParams()
  const [customer, setCustomer] = useState<Customer | null>(null)

  const fetch = async () => {
    try {
      const data = await customerShowService({
        id: Number(id)
      })
      setCustomer(data)
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao buscar o cliente. Por favor, tente novamente mais tarde'
      )
    }
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    customer,
  }
}