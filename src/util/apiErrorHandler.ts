import { HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'

export const handleApiError = (error: any, message: string) => {
  if (error.response?.status !== HttpStatusCode.Unauthorized) {
    toast.error(error.response?.data?.message ?? message)
  }
}
