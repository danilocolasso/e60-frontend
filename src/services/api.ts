import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
    if (error.response?.status === 401) {
      // TODO use response constants
      // TODO redirect to login page
    }
    return Promise.reject(error)
  },
)

export const getCsrfToken = async () => {
  await api.get('/sanctum/csrf-cookie')
}

export default api
