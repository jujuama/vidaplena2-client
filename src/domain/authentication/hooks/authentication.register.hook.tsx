import { HttpError } from '@/core/http'
import { User } from '@/domain'
import { useState } from 'react'
import { AuthenticationApi } from '../authentication.api'

interface Return {
  register: (values: Partial<User>) => Promise<void>
  isLoading: boolean
  isSuccess: boolean
  errors: string[]
}

export const useAuthenticationRegister = (): Return => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const register = async (values: Partial<User>) => {
    setLoading(true)

    setErrors([])

    try {
      await AuthenticationApi.register(values)

      setSuccess(true)
    } catch (error) {
      const code = HttpError.getCode(error)

      const isIncorrect = code === 3

      if (isIncorrect) {
        setErrors(['This email is not available'])
      } else {
        setErrors(['Something went wrong'])
      }
    }

    setLoading(false)
  }

  return {
    register,
    isLoading,
    isSuccess,
    errors,
  }
}
