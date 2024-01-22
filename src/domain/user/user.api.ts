import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { User } from './user.model'

export namespace UserApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<User>,
  ): Promise<User[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users${buildOptions}`)
  }

  export function findOne(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<User>,
  ): Promise<User> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/${userId}${buildOptions}`)
  }

  export function findMe(
    queryOptions?: ApiHelper.QueryOptions<User>,
  ): Promise<User> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/me${buildOptions}`)
  }

  export function createOne(user: Partial<User>): Promise<User> {
    return HttpService.api.post(`/v1/users`, user)
  }

  export function updateOne(
    userId: string,
    values: Partial<User>,
  ): Promise<User> {
    return HttpService.api.patch(`/v1/users/${userId}`, values)
  }

  export function deleteOne(userId: string): Promise<void> {
    return HttpService.api.delete(`/v1/users/${userId}`)
  }
}
