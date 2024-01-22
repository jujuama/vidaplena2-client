'use client'

import { AuthenticationApi, User, UserManager } from '@/domain'
import { AuthorizationType } from '@/domain/authorization'
import { useAuthentication } from '@/modules/authentication'
import { AuthorizationCodeVerification } from '@/modules/authorization/components'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const UserCodeVerification: React.FC<Props> = ({ children }) => {
  const authentication = useAuthentication()

  const user = authentication.user as User

  const handleComplete = () => {
    window.location.reload()
  }

  const handleCancel = async () => {
    await AuthenticationApi.logout(document)

    authentication.logout()
  }

  const isVerified = UserManager.isVerified(user)

  if (isVerified) {
    return <>{children}</>
  }

  return (
    <>
      <AuthorizationCodeVerification
        title="Verify your email"
        user={user}
        type={AuthorizationType.USER_VERIFICATION}
        onComplete={handleComplete}
        onCancel={handleCancel}
      />
    </>
  )
}
