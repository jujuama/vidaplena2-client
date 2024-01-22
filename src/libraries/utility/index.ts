import { v4 as uuidv4 } from 'uuid'

export namespace Utility {
  export function getUUID(): string {
    return uuidv4()
  }

  export function sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milliseconds)
    })
  }

  export function isNull(value: any): boolean {
    return value === null || value === undefined
  }

  export function isDefined(value: any): boolean {
    return value !== null && value !== undefined
  }

  export function openInNewTab(window: Window, url: string): void {
    window.open(url, '_blank')
  }

  export function sortByString<Type>(items: Type[], key: keyof Type): Type[] {
    return items.sort((a: Type, b: Type) =>
      (a[key] as string).localeCompare(b[key] as string),
    )
  }
}
