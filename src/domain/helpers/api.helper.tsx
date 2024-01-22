export namespace ApiHelper {
  export type QueryOptions<Model = any> = {
    filters?: Partial<Record<keyof Model, any>>
    orders?: Partial<Record<keyof Model, 'ASC' | 'DESC'>>
    includes?: string[]
    pagination?: {
      page?: number
      countItems?: number
    }
  }

  export function buildQueryOptions(options: QueryOptions): string {
    if (options) {
      return `?queryOptions=${JSON.stringify(options)}`
    } else {
      return ``
    }
  }
}
