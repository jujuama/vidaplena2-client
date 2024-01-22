import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Notification } from './notification.model'

export namespace NotificationApi {
  export function findManyByMe(
    queryOptions: ApiHelper.QueryOptions<Notification> = {},
  ): Promise<Notification[]> {
    const options = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/me/notifications${options}`)
  }

  export function deleteOneByMe(notificationId: string): Promise<void> {
    return HttpService.api.delete(
      `/v1/users/me/notifications/${notificationId}`,
    )
  }

  export function deleteAllByMe(): Promise<void> {
    return HttpService.api.delete(`/v1/users/me/notifications`)
  }
}
