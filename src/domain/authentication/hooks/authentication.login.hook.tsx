import { HttpError } from '@/core/http'
import { useState } from 'react'
import { AuthenticationApi } from '../authentication.api'

interface Return {
  login: (values: { email: string; password: string }) => Promise<void>
  isLoading: boolean
  isSuccess: boolean
  errors: string[]
}

export const useAuthenticationLogin = (): Return => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const login = async (values: { email: string; password: string }) => {
    setLoading(true)

    setErrors([])

    try {
      await AuthenticationApi.login(values)

      setSuccess(true)
    } catch (error) {
      const code = HttpError.getCode(error)

      const isIncorrect = code === 2

      if (isIncorrect) {
        setErrors(['Incorrect email or password'])
      } else {
        setErrors(['Something went wrong'])
      }
    }

    setLoading(false)
  }

  return {
    login,
    isLoading,
    isSuccess,
    errors,
  }
}
