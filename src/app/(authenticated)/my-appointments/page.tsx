'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbDescription, MrbButton, MrbCol, MrbEmptyState, MrbList, MrbLoader, MrbRow, MrbTypography, MrbDescriptionList, MrbModal } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Service, ServiceApi } from '@/domain/service'
import { Appointment, AppointmentApi } from '@/domain/appointment'
import { Booking, BookingApi } from '@/domain/booking'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function MyAppointmentsPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Booking[]>([])
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [selectedAppointment, setSelectedAppointment] = useState<Booking | null>(null)

  useEffect(() => {
    if (userId) {
      setLoading(true)
      BookingApi.findManyByUserId(userId, {
        includes: ['appointment', 'appointment.business', 'appointment.service'],
      })
        .then(setItems)
        .catch(() => toast.error('Failed to fetch appointments'))
        .finally(() => setLoading(false))
    }
  }, [userId])

  const handleSeeMore = () => {
    router.push('/my-appointments')
  }

  const handleOpenModal = (appointment: Booking) => {
    setSelectedAppointment(appointment)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedAppointment(null)
  }

  const handleCancelAppointment = async (bookingId: string) => {
    try {
      await BookingApi.deleteOne(bookingId)
      toast.success('Appointment cancelled successfully')
      setItems(items.filter(item => item.id !== bookingId))
      handleCloseModal()
    } catch {
      toast.error('Failed to cancel the appointment')
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items.length === 0 && (
            <MrbEmptyState>
              You have no upcoming appointments.
            </MrbEmptyState>
          )}
          <MrbList divider={false}>
            {items.map(item => (
              <MrbList.Item
                key={item.id}
                onClick={() => handleOpenModal(item)}
              >
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbTypography variant="h3">
                      {item.appointment?.business?.name}
                    </MrbTypography>
                    <MrbDescriptionList orientation="horizontal">
                      <MrbDescription>
                        <MrbDescription.Label>Service</MrbDescription.Label>
                        <MrbDescription.Value>
                          {item.appointment?.service?.name}
                        </MrbDescription.Value>
                      </MrbDescription>
                      <MrbDescription>
                        <MrbDescription.Label>Date</MrbDescription.Label>
                        <MrbDescription.Value>
                          {item.appointment?.date}
                        </MrbDescription.Value>
                      </MrbDescription>
                      <MrbDescription>
                        <MrbDescription.Label>Time</MrbDescription.Label>
                        <MrbDescription.Value>
                          {item.appointment?.time}
                        </MrbDescription.Value>
                      </MrbDescription>
                    </MrbDescriptionList>
                  </MrbCol>
                </MrbRow>
              </MrbList.Item>
            ))}
          </MrbList>
          {items.length > 3 && (
            <MrbButton onClick={handleSeeMore}>See More</MrbButton>
          )}
        </>
      )}

      {isModalOpen && selectedAppointment && (
        <MrbModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          header="Appointment Details"
          footer={
            <MrbButton onClick={() => handleCancelAppointment(selectedAppointment.id)}>
              Cancel Appointment
            </MrbButton>
          }
        >
          <MrbDescriptionList orientation="vertical">
            <MrbDescription>
              <MrbDescription.Label>Service</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedAppointment.appointment?.service?.name}
              </MrbDescription.Value>
            </MrbDescription>
            <MrbDescription>
              <MrbDescription.Label>Date</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedAppointment.appointment?.date}
              </MrbDescription.Value>
            </MrbDescription>
            <MrbDescription>
              <MrbDescription.Label>Time</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedAppointment.appointment?.time}
              </MrbDescription.Value>
            </MrbDescription>
          </MrbDescriptionList>
        </MrbModal>
      )}
    </PageLayout>
  )
}