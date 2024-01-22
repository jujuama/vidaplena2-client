import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { ClientUser } from './clientUser.model'

export namespace ClientUserApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<ClientUser>,
  ): Promise<ClientUser[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/clientUsers${buildOptions}`)
  }

  export function findOne(
    clientUserId: string,
    queryOptions?: ApiHelper.QueryOptions<ClientUser>,
  ): Promise<ClientUser> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/clientUsers/${clientUserId}${buildOptions}`,
    )
  }

  export function createOne(
    clientUser: Partial<ClientUser>,
  ): Promise<ClientUser> {
    return HttpService.api.post(`/v1/clientUsers`, clientUser)
  }

  export function updateOne(
    clientUserId: string,
    values: Partial<ClientUser>,
  ): Promise<ClientUser> {
    return HttpService.api.patch(
      `/v1/clientUsers/${clientUserId}`,
      values,
    )
  }

  export function deleteOne(clientUserId: string): Promise<void> {
    return HttpService.api.delete(`/v1/clientUsers/${clientUserId}`)
  }

}
