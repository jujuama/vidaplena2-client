import { HttpService } from '../../core/http'
import { AuthorizationRole, AuthorizationType } from './authorization.model'

export namespace AuthorizationApi {
  export function sendCode(
    type: AuthorizationType,
    email: string,
  ): Promise<{ keyPublic: string }> {
    return HttpService.api.post(`/v1/authorization/${type}/code`, { email })
  }

  export function verifyCode(
    type: AuthorizationType,
    email: string,
    values: {
      keyPublic: string
      keyPrivate: string
    },
  ): Promise<void> {
    const body = { ...values, email }

    return HttpService.api.post(
      `/v1/authorization/${type}/code-verification`,
      body,
    )
  }

  export function getPermissions(): Promise<{ roles: AuthorizationRole[] }> {
    return HttpService.api.get(`/v1/users/me/authorization/permissions`)
  }
}
