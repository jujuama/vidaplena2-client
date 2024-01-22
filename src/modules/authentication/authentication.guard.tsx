import { useCoreStore } from '@/core/store'
import { MrbSplashScreen, MrbToast } from '@/designSystem'
import { AuthenticationApi, UserApi } from '@/domain'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { RouterObject } from '../../core/router'
import { GlobalService } from '../global'
import { useAuthentication } from './authentication.context'

type Props = {
  children: ReactNode
  isPublic?: boolean
}

function AuthenticationGuard({ children, isPublic }: Props): ReactNode {
  const authentication = useAuthentication()
  const store = useCoreStore()
  const pathname = usePathname()
  const toast = MrbToast.useToast()
  const router = useRouter()

  const [isLoading, setLoading] = useState(true)
  const [pathRedirected, setPathRedirected] = useState<string>()
  const [isRedirected, setRedirected] = useState(false)

  const handlePublic = async () => {
    if (authentication.isLoggedIn) {
      router.replace(RouterObject.route.HOME)

      setPathRedirected(RouterObject.route.HOME)

      return
    }

    setLoading(true)

    try {
      await AuthenticationApi.refresh()

      const user = await UserApi.findMe()

      await GlobalService.initialiseStore({ store, toast })

      authentication.login(user)

      router.replace(RouterObject.route.HOME)

      setPathRedirected(RouterObject.route.HOME)
    } catch (error) {
      authentication.logout()

      await GlobalService.cleanStore({ store })

      setRedirected(true)

      setLoading(false)
    }
  }

  const handleProtected = async () => {
    if (authentication.isLoggedIn) {
      setLoading(false)

      setRedirected(true)

      return
    }

    setLoading(true)

    try {
      await AuthenticationApi.refresh()

      const user = await UserApi.findMe()

      await GlobalService.initialiseStore({ store, toast })

      authentication.login(user)

      setLoading(false)

      setRedirected(true)
    } catch (error) {
      authentication.logout()

      await GlobalService.cleanStore({ store })

      router.replace(RouterObject.route.LOGIN)

      setPathRedirected(RouterObject.route.LOGIN)
    }
  }

  useEffect(() => {
    if (isPublic) {
      handlePublic()
    } else {
      handleProtected()
    }
  }, [isPublic, authentication.isLoggedIn])

  useEffect(() => {
    if (!isLoading) {
      const isReady = pathname === pathRedirected

      if (isReady) {
        setRedirected(true)
      }
    }
  }, [isLoading, pathname])

  return (
    <>
      {isLoading || !isRedirected ? (
        <MrbSplashScreen name="Vida Plena 2" />
      ) : (
        children
      )}
    </>
  )
}

export { AuthenticationGuard }
