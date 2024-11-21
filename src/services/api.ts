import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.response?.status === 401) { // TODO use response constants
      // TODO redirect to login page
    }
    return Promise.reject(error)
  }
)

export const getCsrfToken = async () => {
  const { data } = await api.get('/sanctum/csrf-cookie')
  return data
}

export default api
