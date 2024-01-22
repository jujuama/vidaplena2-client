import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { BusinessUserRole } from './businessUserRole.model'

export namespace BusinessUserRoleApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<BusinessUserRole>,
  ): Promise<BusinessUserRole[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/businessUserRoles${buildOptions}`)
  }

  export function findOne(
    businessUserRoleId: string,
    queryOptions?: ApiHelper.QueryOptions<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businessUserRoles/${businessUserRoleId}${buildOptions}`,
    )
  }

  export function createOne(
    businessUserRole: Partial<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    return HttpService.api.post(`/v1/businessUserRoles`, businessUserRole)
  }

  export function updateOne(
    businessUserRoleId: string,
    values: Partial<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    return HttpService.api.patch(
      `/v1/businessUserRoles/${businessUserRoleId}`,
      values,
    )
  }

  export function deleteOne(businessUserRoleId: string): Promise<void> {
    return HttpService.api.delete(`/v1/businessUserRoles/${businessUserRoleId}`)
  }

export function findManyByBusinessId(
    businessId: string,
    queryOptions?: ApiHelper.QueryOptions<BusinessUserRole>,
  ): Promise<BusinessUserRole[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businesss/business/${businessId}/businessUserRoles${buildOptions}`,
    )
  }

  export function createOneByBusinessId(
    businessId: string,
    values: Partial<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    return HttpService.api.post(
      `/v1/businesss/business/${businessId}/businessUserRoles`,
      values,
    )
  }

export function findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<BusinessUserRole>,
  ): Promise<BusinessUserRole[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businessUsers/user/${userId}/businessUserRoles${buildOptions}`,
    )
  }

  export function createOneByUserId(
    userId: string,
    values: Partial<BusinessUserRole>,
  ): Promise<BusinessUserRole> {
    return HttpService.api.post(
      `/v1/businessUsers/user/${userId}/businessUserRoles`,
      values,
    )
  }

}
