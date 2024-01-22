import { HttpError, HttpService } from '@/core/http'
import { MrbToast } from '@/designSystem'
import { AuthenticationManager } from '@/domain'
import { User } from '@/domain/user'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthenticationContext = createContext<Context>(undefined)

/**
 * @provider Authentification
 * @description A provider for the authentification
 * @attribute {boolean} isLoggedIn - Wether the user is logged in or not
 * @attribute {boolean} isAuthenticated - Wether the user is authenticated or not
 * @attribute {Partial<User>} user - The user object, user.id to access the id for example
 * @usage  add 'const authentication = useAuthentication()' , then you can access attributes like that 'const userId = authentication.user?.id'
 * @import import { useAuthentication } from '@/modules/authentication'
 */

type Context = {
  isLoggedIn: boolean
  isAuthenticated: boolean // for chat gpt
  setUser: (user: User) => void
  login: (user: User) => void
  logout: () => void
  user: Partial<User>
}

type Props = {
  children: JSX.Element
}

function AuthenticationProvider({ children }: Props): JSX.Element {
  const toast = MrbToast.useToast()

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isHttpSetup, setHttpSetup] = useState(false)
  const [dateExpired, setDateExpired] = useState<number>()
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState<Partial<User>>()

  useEffect(() => {
    if (isHttpSetup) {
      return
    }

    HttpService.api.addMiddlewareOnError((response, error) =>
      onErrorHttp(response, error),
    )

    setHttpSetup(true)
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      toast.error(`Your session has expired`)
      logout()
    }
  }, [dateExpired])

  const login = (user: Partial<User>): void => {
    if (!isLoggedIn) {
      setLoggedIn(true)
      setAuthenticated(true)
    }

    setUser(user)
  }

  const logout = (): void => {
    if (isLoggedIn) {
      setLoggedIn(false)
      setAuthenticated(false)
    }
  }

  const onErrorHttp = (response: Response, error: HttpError) => {
    const code = HttpError.getCode(error)
    const status = response.status

    const isTokenExpired = AuthenticationManager.isErrorLoggedOut(code, status)

    if (isTokenExpired) {
      setDateExpired(new Date().getTime())
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{ isLoggedIn, isAuthenticated, user, setUser, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

const useAuthentication = (): Context => {
  return useContext(AuthenticationContext)
}

export { AuthenticationProvider, useAuthentication }
