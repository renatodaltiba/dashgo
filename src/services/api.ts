import axios, { AxiosError } from 'axios'
import { parseCookies, destroyCookie } from 'nookies'

let cookies = parseCookies()

export const api = axios.create({
  baseURL: 'http://192.168.4.5:3333',
  headers: {
    Authorization: `Bearer ${cookies['auth_token']}`,
  },
})

api.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      destroyCookie(undefined, 'auth_token')
    }
  }
)
