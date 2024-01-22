import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Profile } from './profile.model'

export namespace ProfileApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Profile>,
  ): Promise<Profile[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/profiles${buildOptions}`)
  }

  export function findOne(
    profileId: string,
    queryOptions?: ApiHelper.QueryOptions<Profile>,
  ): Promise<Profile> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/profiles/${profileId}${buildOptions}`,
    )
  }

  export function createOne(
    profile: Partial<Profile>,
  ): Promise<Profile> {
    return HttpService.api.post(`/v1/profiles`, profile)
  }

  export function updateOne(
    profileId: string,
    values: Partial<Profile>,
  ): Promise<Profile> {
    return HttpService.api.patch(
      `/v1/profiles/${profileId}`,
      values,
    )
  }

  export function deleteOne(profileId: string): Promise<void> {
    return HttpService.api.delete(`/v1/profiles/${profileId}`)
  }

export function findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Profile>,
  ): Promise<Profile[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/clientUsers/user/${userId}/profiles${buildOptions}`,
    )
  }

  export function createOneByUserId(
    userId: string,
    values: Partial<Profile>,
  ): Promise<Profile> {
    return HttpService.api.post(
      `/v1/clientUsers/user/${userId}/profiles`,
      values,
    )
  }

}
