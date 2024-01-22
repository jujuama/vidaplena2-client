import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Service } from './service.model'

export namespace ServiceApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Service>,
  ): Promise<Service[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/services${buildOptions}`)
  }

  export function findOne(
    serviceId: string,
    queryOptions?: ApiHelper.QueryOptions<Service>,
  ): Promise<Service> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/services/${serviceId}${buildOptions}`,
    )
  }

  export function createOne(
    service: Partial<Service>,
  ): Promise<Service> {
    return HttpService.api.post(`/v1/services`, service)
  }

  export function updateOne(
    serviceId: string,
    values: Partial<Service>,
  ): Promise<Service> {
    return HttpService.api.patch(
      `/v1/services/${serviceId}`,
      values,
    )
  }

  export function deleteOne(serviceId: string): Promise<void> {
    return HttpService.api.delete(`/v1/services/${serviceId}`)
  }

export function findManyByBusinessId(
    businessId: string,
    queryOptions?: ApiHelper.QueryOptions<Service>,
  ): Promise<Service[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businesss/business/${businessId}/services${buildOptions}`,
    )
  }

  export function createOneByBusinessId(
    businessId: string,
    values: Partial<Service>,
  ): Promise<Service> {
    return HttpService.api.post(
      `/v1/businesss/business/${businessId}/services`,
      values,
    )
  }

}
