import { HttpService } from '../../core/http'
import { User } from '../user'

export namespace AuthenticationApi {
  export function login(values: {
    email: string
    password: string
  }): Promise<void> {
    return HttpService.api.post(`/v1/authentication/login`, values)
  }

  export function register(values: Partial<User>): Promise<void> {
    return HttpService.api.post(`/v1/authentication/register`, values)
  }

  export function refresh(): Promise<void> {
    return HttpService.api.post(`/v1/authentication/refresh`)
  }

  export function logout(document: Document): Promise<void> {
    return HttpService.api
      .post(`/v1/authentication/logout`)
      .catch(() => {})
      .then(() => {
        document.cookie =
          'ACCESS_TOKEN= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
      })
  }

  export function sendResetPassword(email: string): Promise<void> {
    return HttpService.api.post(`/v1/authentication/reset-password-email`, {
      email,
    })
  }

  export function resetPassword(
    token: string,
    password: string,
  ): Promise<void> {
    return HttpService.api.patch(`/v1/authentication/reset-password`, {
      token,
      password,
    })
  }

  export function googleCallback(values: {
    credential?: string
  }): Promise<void> {
    return HttpService.api.post(`/v1/authentication/google/callback`, {
      token: values.credential,
    })
  }
}
