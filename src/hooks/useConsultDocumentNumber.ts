import { customerCnpjConsult } from '@/services/customer/customer-cnpj-consult.service'
import { useState } from 'react'
import {
  FieldValues,
  Path,
  UseFormGetValues,
  UseFormSetValue,
} from 'react-hook-form'
import { toast } from 'react-toastify'

interface UseConsultDocumentNumberProps<T extends FieldValues> {
  getValues: UseFormGetValues<T>
  setValue: UseFormSetValue<T>
}

export function useConsultDocumentNumber<T extends FieldValues>({
  getValues,
  setValue,
}: UseConsultDocumentNumberProps<T>) {
  const [loading, setLoading] = useState(false)

  async function consultDocument() {
    const toastId = toast.loading('Consultando CNPJ...')
    setLoading(true)

    try {
      const cnpj = getValues('document_number' as Path<T>)

      if (!cnpj) {
        toast.update(toastId, {
          render: 'Por favor, informe um CNPJ válido',
          type: 'warning',
          isLoading: false,
          autoClose: 3000,
        })

        return
      }

      const data = await customerCnpjConsult({ cnpj })

      Object.entries(data).forEach(([key, value]) => {
        setValue(key as Path<T>, value)
      })

      toast.dismiss(toastId)
    } catch (error: any) {
      toast.update(toastId, {
        render:
          error.response?.data?.message ??
          'Ocorreu um erro ao consultar o CNPJ. Por favor, tente novamente mais tarde',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  return {
    consultDocument,
    loading,
  }
}
