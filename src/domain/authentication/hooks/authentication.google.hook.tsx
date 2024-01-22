import { HttpError } from '@/core/http'
import { useState } from 'react'
import { AuthenticationApi } from '../authentication.api'

interface Return {
  googleCallback: (response: { credential: string }) => Promise<void>
  isLoading: boolean
  isSuccess: boolean
  errors: string[]
}

export const useAuthenticationGoogle = (): Return => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const googleCallback = async (response: { credential: string }) => {
    setLoading(true)

    setErrors([])

    try {
      await AuthenticationApi.googleCallback(response)

      setSuccess(true)
    } catch (error) {
      const code = HttpError.getCode(error)

      const isIncorrect = code === 1

      if (isIncorrect) {
        setErrors(['Could not login with Google'])
      } else {
        setErrors(['Something went wrong'])
      }
    }

    setLoading(false)
  }

  return {
    googleCallback,
    isLoading,
    isSuccess,
    errors,
  }
}
