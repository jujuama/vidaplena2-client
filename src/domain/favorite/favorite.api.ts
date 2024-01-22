import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Favorite } from './favorite.model'

export namespace FavoriteApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Favorite>,
  ): Promise<Favorite[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/favorites${buildOptions}`)
  }

  export function findOne(
    favoriteId: string,
    queryOptions?: ApiHelper.QueryOptions<Favorite>,
  ): Promise<Favorite> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/favorites/${favoriteId}${buildOptions}`,
    )
  }

  export function createOne(
    favorite: Partial<Favorite>,
  ): Promise<Favorite> {
    return HttpService.api.post(`/v1/favorites`, favorite)
  }

  export function updateOne(
    favoriteId: string,
    values: Partial<Favorite>,
  ): Promise<Favorite> {
    return HttpService.api.patch(
      `/v1/favorites/${favoriteId}`,
      values,
    )
  }

  export function deleteOne(favoriteId: string): Promise<void> {
    return HttpService.api.delete(`/v1/favorites/${favoriteId}`)
  }

export function findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Favorite>,
  ): Promise<Favorite[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/clientUsers/user/${userId}/favorites${buildOptions}`,
    )
  }

  export function createOneByUserId(
    userId: string,
    values: Partial<Favorite>,
  ): Promise<Favorite> {
    return HttpService.api.post(
      `/v1/clientUsers/user/${userId}/favorites`,
      values,
    )
  }

export function findManyByBusinessId(
    businessId: string,
    queryOptions?: ApiHelper.QueryOptions<Favorite>,
  ): Promise<Favorite[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businesss/business/${businessId}/favorites${buildOptions}`,
    )
  }

  export function createOneByBusinessId(
    businessId: string,
    values: Partial<Favorite>,
  ): Promise<Favorite> {
    return HttpService.api.post(
      `/v1/businesss/business/${businessId}/favorites`,
      values,
    )
  }

}
