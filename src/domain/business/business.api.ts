import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Business } from './business.model'

export namespace BusinessApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Business>,
  ): Promise<Business[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/businesss${buildOptions}`)
  }

  export function findOne(
    businessId: string,
    queryOptions?: ApiHelper.QueryOptions<Business>,
  ): Promise<Business> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businesss/${businessId}${buildOptions}`,
    )
  }

  export function createOne(
    business: Partial<Business>,
  ): Promise<Business> {
    return HttpService.api.post(`/v1/businesss`, business)
  }

  export function updateOne(
    businessId: string,
    values: Partial<Business>,
  ): Promise<Business> {
    return HttpService.api.patch(
      `/v1/businesss/${businessId}`,
      values,
    )
  }

  export function deleteOne(businessId: string): Promise<void> {
    return HttpService.api.delete(`/v1/businesss/${businessId}`)
  }

export function findManyByOwnerId(
    ownerId: string,
    queryOptions?: ApiHelper.QueryOptions<Business>,
  ): Promise<Business[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businessUsers/owner/${ownerId}/businesss${buildOptions}`,
    )
  }

  export function createOneByOwnerId(
    ownerId: string,
    values: Partial<Business>,
  ): Promise<Business> {
    return HttpService.api.post(
      `/v1/businessUsers/owner/${ownerId}/businesss`,
      values,
    )
  }

}
