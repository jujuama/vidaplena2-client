'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbButton, MrbCol, MrbEmptyState, MrbList, MrbLoader, MrbRow, MrbTypography } from '@/designSystem'
import { Business, BusinessApi } from '@/domain/business'

import { Appointment, AppointmentApi } from '@/domain/appointment'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function ManageAppointmentsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const businessId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    if (businessId) {
      setLoading(true)
      AppointmentApi.findManyByBusinessId(businessId)
        .then(setAppointments)
        .catch(() => toast.error('Failed to fetch appointments.'))
        .finally(() => setLoading(false))
    }
  }, [businessId])

  const handleAddAppointment = () => {
    router.push(`/book-appointment/${businessId}`)
  }

  const handleEditAppointment = (appointmentId: string) => {
    // Logic to navigate to appointment edit page or open edit modal
  }

  const handleDeleteAppointment = (appointmentId: string) => {
    if (confirm('Are you sure you want to delete this appointment?')) {
      AppointmentApi.deleteOne(appointmentId)
        .then(() => {
          setAppointments(appointments.filter(a => a.id !== appointmentId))
          toast.success('Appointment deleted successfully.')
        })
        .catch(() => toast.error('Failed to delete appointment.'))
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          <MrbButton onClick={handleAddAppointment}>Add Appointment</MrbButton>

          {appointments.length === 0 && (
            <MrbEmptyState>
              There are no appointments to display.
            </MrbEmptyState>
          )}

          <MrbList divider={true}>
            {appointments.map(appointment => (
              <MrbList.Item key={appointment.id}>
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbTypography variant="h3">{appointment.service?.name}</MrbTypography>
                    <MrbTypography>{appointment.date} at {appointment.time}</MrbTypography>
                  </MrbCol>
                  <MrbCol>
                    <MrbButton variant="warning" onClick={() => handleEditAppointment(appointment.id)}>Edit</MrbButton>
                    <MrbButton variant="danger" onClick={() => handleDeleteAppointment(appointment.id)}>Delete</MrbButton>
                  </MrbCol>
                </MrbRow>
              </MrbList.Item>
            ))}
          </MrbList>
        </>
      )}
    </PageLayout>
  )
}