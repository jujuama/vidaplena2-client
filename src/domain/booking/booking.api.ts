import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Booking } from './booking.model'

export namespace BookingApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Booking>,
  ): Promise<Booking[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/bookings${buildOptions}`)
  }

  export function findOne(
    bookingId: string,
    queryOptions?: ApiHelper.QueryOptions<Booking>,
  ): Promise<Booking> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/bookings/${bookingId}${buildOptions}`,
    )
  }

  export function createOne(
    booking: Partial<Booking>,
  ): Promise<Booking> {
    return HttpService.api.post(`/v1/bookings`, booking)
  }

  export function updateOne(
    bookingId: string,
    values: Partial<Booking>,
  ): Promise<Booking> {
    return HttpService.api.patch(
      `/v1/bookings/${bookingId}`,
      values,
    )
  }

  export function deleteOne(bookingId: string): Promise<void> {
    return HttpService.api.delete(`/v1/bookings/${bookingId}`)
  }

export function findManyByAppointmentId(
    appointmentId: string,
    queryOptions?: ApiHelper.QueryOptions<Booking>,
  ): Promise<Booking[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/appointments/appointment/${appointmentId}/bookings${buildOptions}`,
    )
  }

  export function createOneByAppointmentId(
    appointmentId: string,
    values: Partial<Booking>,
  ): Promise<Booking> {
    return HttpService.api.post(
      `/v1/appointments/appointment/${appointmentId}/bookings`,
      values,
    )
  }

export function findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Booking>,
  ): Promise<Booking[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/clientUsers/user/${userId}/bookings${buildOptions}`,
    )
  }

  export function createOneByUserId(
    userId: string,
    values: Partial<Booking>,
  ): Promise<Booking> {
    return HttpService.api.post(
      `/v1/clientUsers/user/${userId}/bookings`,
      values,
    )
  }

}
