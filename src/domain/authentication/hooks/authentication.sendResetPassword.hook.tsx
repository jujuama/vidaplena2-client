import { useState } from 'react'
import { AuthenticationApi } from '../authentication.api'

interface Return {
  sendEmail: (email: string) => Promise<void>
  isLoading: boolean
  isSuccess: boolean
  errors: string[]
}

export const useAuthenticationSendResetPassword = (): Return => {
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const sendEmail = async (email: string) => {
    setLoading(true)

    setErrors([])

    try {
      await AuthenticationApi.sendResetPassword(email)

      setSuccess(true)
    } catch (error) {
      // We avoid indicating if the email exists for security reasons
    }

    setLoading(false)
  }

  return {
    sendEmail,
    isLoading,
    isSuccess,
    errors,
  }
}
