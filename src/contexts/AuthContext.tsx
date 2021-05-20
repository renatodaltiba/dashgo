import { createContext, ReactNode, useState, useEffect } from 'react'
import { api } from '../services/api'
import { parseCookies, setCookie } from 'nookies'
import Router from 'next/router'

type UserProps = {
  name: string
  email: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  user: UserProps
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()

  async function getUser() {
    const { auth_token } = parseCookies()
    if (auth_token) {
      await api
        .get('me')
        .then(response => {
          setUser(response.data)
          Router.push('/dashboard')
        })
        .catch(() => {
          alert('Por favor faça login antes')

          api.delete('auth')

          Router.push('/')
        })
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    // try {
    await api
      .post('auth', { email, password })
      .then(response => {
        const { token } = response.data

        setCookie(undefined, 'auth_token', token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`

        getUser()

        Router.push('/dashboard')
      })
      .catch(err => {
        console.log(err.data)
      })
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
