'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbLink, MrbLoader, MrbRow, MrbTypography } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Appointment, AppointmentApi } from '@/domain/appointment'
import { Booking, BookingApi } from '@/domain/booking'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function AppointmentDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()

  const [isLoading, setLoading] = useState<boolean>(true)
  const [item, setItem] = useState<Appointment | null>(null)

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        const appointmentDetails = await AppointmentApi.findOne(params.id, {
          includes: ['business', 'service'],
        })
        setItem(appointmentDetails)
      } catch (error) {
        toast.error('Failed to fetch appointment details.')
      } finally {
        setLoading(false)
      }
    }

    fetchAppointmentDetails()
  }, [params.id])

  const handleCancelBooking = async () => {
    if (item?.bookings && item.bookings.length > 0) {
      try {
        await BookingApi.deleteOne(item.bookings[0].id)
        toast.success('Booking cancelled successfully.')
        router.push('/my-appointments')
      } catch (error) {
        toast.error('Failed to cancel the booking.')
      }
    }
  }

  const handleBookAppointment = () => {
    router.push(`/book-appointment/${params.id}`)
  }

  const isUserBookedAppointment = item?.bookings?.some(
    (booking) => booking.userId === authentication.user?.id
  )

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && item && (
        <MrbCard>
          <MrbCard.Body>
            <MrbRow horizontal="center">
              <MrbTypography variant="h3">{item.service?.name}</MrbTypography>
            </MrbRow>
            <MrbRow>
              <MrbTypography variant="primary">Time: {item.time}</MrbTypography>
            </MrbRow>
            <MrbRow>
              <MrbTypography variant="primary">Date: {item.date}</MrbTypography>
            </MrbRow>
            <MrbRow>
              <MrbLink to={`/business/${item.businessId}`} variant="primary">
                {item.business?.name}
              </MrbLink>
            </MrbRow>
          </MrbCard.Body>
          <MrbCard.Footer>
            <MrbRow horizontal="right" gap={1}>
              {authentication.isAuthenticated && isUserBookedAppointment ? (
                <MrbButton onClick={handleCancelBooking} variant="danger">
                  Cancel Booking
                </MrbButton>
              ) : (
                <MrbButton onClick={handleBookAppointment} variant="primary">
                  Book Appointment
                </MrbButton>
              )}
            </MrbRow>
          </MrbCard.Footer>
        </MrbCard>
      )}
    </PageLayout>
  )
}