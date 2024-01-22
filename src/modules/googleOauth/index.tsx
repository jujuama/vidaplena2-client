import { ConfigurationService } from '@/core/configuration'
import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { ReactNode } from 'react'

export namespace GoogleOauth {
  export function getClientId(): string {
    return ConfigurationService.getGoogleClientId()
  }

  export function isActive(): boolean {
    return !!getClientId()
  }

  export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const clientId = getClientId()

    if (!isActive()) {
      return children
    }

    return (
      <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>
    )
  }
}
