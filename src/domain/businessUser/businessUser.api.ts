import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { BusinessUser } from './businessUser.model'

export namespace BusinessUserApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<BusinessUser>,
  ): Promise<BusinessUser[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/businessUsers${buildOptions}`)
  }

  export function findOne(
    businessUserId: string,
    queryOptions?: ApiHelper.QueryOptions<BusinessUser>,
  ): Promise<BusinessUser> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businessUsers/${businessUserId}${buildOptions}`,
    )
  }

  export function createOne(
    businessUser: Partial<BusinessUser>,
  ): Promise<BusinessUser> {
    return HttpService.api.post(`/v1/businessUsers`, businessUser)
  }

  export function updateOne(
    businessUserId: string,
    values: Partial<BusinessUser>,
  ): Promise<BusinessUser> {
    return HttpService.api.patch(
      `/v1/businessUsers/${businessUserId}`,
      values,
    )
  }

  export function deleteOne(businessUserId: string): Promise<void> {
    return HttpService.api.delete(`/v1/businessUsers/${businessUserId}`)
  }

}
