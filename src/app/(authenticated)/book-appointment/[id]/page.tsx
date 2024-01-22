'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbDescription, MrbButton, MrbTypography, MrbDescriptionList, MrbModal, MrbForm } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Service, ServiceApi } from '@/domain/service'
import { Appointment, AppointmentApi } from '@/domain/appointment'
import { Booking, BookingApi } from '@/domain/booking'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function BookAppointmentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [services, setServices] = useState([])
  const [appointments, setAppointments] = useState([])
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await ServiceApi.findMany()
      setServices(servicesData)
    }
    fetchServices()
  }, [])

  useEffect(() => {
    const fetchAppointments = async () => {
      if (selectedService) {
        const appointmentsData = await AppointmentApi.findManyByServiceId(selectedService)
        setAppointments(appointmentsData)
      }
    }
    fetchAppointments()
  }, [selectedService])

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const booking = await BookingApi.createOneByUserId(userId, {
        appointmentId: values.appointmentId,
      })
      toast.success('Appointment booked successfully!')
      router.push('/my-appointments')
    } catch (error) {
      toast.error('Failed to book the appointment.')
    }
    setLoading(false)
    setModalOpen(false)
  }

  const handleFormChange = (values) => {
    setSelectedService(values.serviceId)
    setSelectedAppointment(values.appointmentId)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <PageLayout layout="narrow">
      <MrbTypography variant="h1">Book an Appointment</MrbTypography>
      <MrbCard size="full-width" className="m-2">
        <MrbCard.Body>
          <MrbForm
            onSubmit={() => setModalOpen(true)}
            onChange={handleFormChange}
            inputs={[
              {
                key: 'serviceId',
                label: 'Service',
                type: 'select',
                options: services.map(service => ({ label: service.name, value: service.id })),
              },
              {
                key: 'appointmentId',
                label: 'Appointment Time',
                type: 'select',
                options: appointments.map(appointment => ({
                  label: `${appointment.date} at ${appointment.time}`,
                  value: appointment.id,
                })),
              },
            ]}
          >
            <MrbButton variant="primary" type="submit" isLoading={isLoading}>
              Book Appointment
            </MrbButton>
          </MrbForm>
        </MrbCard.Body>
      </MrbCard>
      <MrbModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        header="Confirm Appointment"
        footer={
          <>
            <MrbButton onClick={handleModalClose}>Cancel</MrbButton>
            <MrbButton variant="primary" onClick={() => handleSubmit({ appointmentId: selectedAppointment })}>
              Confirm Booking
            </MrbButton>
          </>
        }
      >
        <MrbDescriptionList>
          <MrbDescription>
            <MrbDescription.Label>Service</MrbDescription.Label>
            <MrbDescription.Value>
              {services.find(service => service.id === selectedService)?.name}
            </MrbDescription.Value>
          </MrbDescription>
          <MrbDescription>
            <MrbDescription.Label>Time</MrbDescription.Label>
            <MrbDescription.Value>
              {appointments.find(appointment => appointment.id === selectedAppointment)?.time}
            </MrbDescription.Value>
          </MrbDescription>
          <MrbDescription>
            <MrbDescription.Label>Date</MrbDescription.Label>
            <MrbDescription.Value>
              {appointments.find(appointment => appointment.id === selectedAppointment)?.date}
            </MrbDescription.Value>
          </MrbDescription>
        </MrbDescriptionList>
      </MrbModal>
    </PageLayout>
  )
}