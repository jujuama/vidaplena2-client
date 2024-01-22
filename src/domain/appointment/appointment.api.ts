import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Appointment } from './appointment.model'

export namespace AppointmentApi {
  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Appointment>,
  ): Promise<Appointment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/appointments${buildOptions}`)
  }

  export function findOne(
    appointmentId: string,
    queryOptions?: ApiHelper.QueryOptions<Appointment>,
  ): Promise<Appointment> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/appointments/${appointmentId}${buildOptions}`,
    )
  }

  export function createOne(
    appointment: Partial<Appointment>,
  ): Promise<Appointment> {
    return HttpService.api.post(`/v1/appointments`, appointment)
  }

  export function updateOne(
    appointmentId: string,
    values: Partial<Appointment>,
  ): Promise<Appointment> {
    return HttpService.api.patch(
      `/v1/appointments/${appointmentId}`,
      values,
    )
  }

  export function deleteOne(appointmentId: string): Promise<void> {
    return HttpService.api.delete(`/v1/appointments/${appointmentId}`)
  }

export function findManyByBusinessId(
    businessId: string,
    queryOptions?: ApiHelper.QueryOptions<Appointment>,
  ): Promise<Appointment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/businesss/business/${businessId}/appointments${buildOptions}`,
    )
  }

  export function createOneByBusinessId(
    businessId: string,
    values: Partial<Appointment>,
  ): Promise<Appointment> {
    return HttpService.api.post(
      `/v1/businesss/business/${businessId}/appointments`,
      values,
    )
  }

export function findManyByServiceId(
    serviceId: string,
    queryOptions?: ApiHelper.QueryOptions<Appointment>,
  ): Promise<Appointment[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/services/service/${serviceId}/appointments${buildOptions}`,
    )
  }

  export function createOneByServiceId(
    serviceId: string,
    values: Partial<Appointment>,
  ): Promise<Appointment> {
    return HttpService.api.post(
      `/v1/services/service/${serviceId}/appointments`,
      values,
    )
  }

}
