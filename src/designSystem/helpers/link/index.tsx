import { usePathname, useSearchParams } from 'next/navigation'

export namespace LinkHelper {
  export const usePathActive = (to: string): { isActive: boolean } => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = `?${searchParams.toString()}`
    const path = pathname + params
    let isActive: boolean

    const isIndex = to === '/'
    if (isIndex) {
      isActive = path === to
    } else {
      isActive = path.includes(to)
    }

    return {
      isActive,
    }
  }
}
