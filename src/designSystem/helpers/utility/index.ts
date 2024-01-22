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

  export function sortByString<Type>(items: Type[], key: keyof Type): Type[] {
    return items.sort((a: Type, b: Type) =>
      (a[key] as string).localeCompare(b[key] as string),
    )
  }

  export function stringToNumber(content: string, range: number): number {
    // Calculate a hash for the input string
    let hash = 0
    for (let i = 0; i < content.length; i++) {
      hash += content.charCodeAt(i)
    }

    // Map the hash value to a number between 1 and the range (ex: 5)
    // We use modulo to ensure the result is within the desired range (1-5)
    const num = hash % range

    return num
  }

  export function stringToInitials(content: string): string {
    const words = content.trim().split(' ')

    const isOneWord = words.length === 1

    if (isOneWord) {
      return words[0].slice(0, 2)
    }

    return `${words[0][0]}${words[1][0]}`
  }

  export function buildRandomAlphanumericString(length: number): string {
    const alphanumericCharacters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let result = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * alphanumericCharacters.length,
      )
      result += alphanumericCharacters.charAt(randomIndex)
    }

    return result
  }
}
