'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbDescription, MrbAvatar, MrbButton, MrbEmptyState, MrbLoader, MrbRow, MrbTag, MrbDescriptionList, MrbModal } from '@/designSystem'
import { Service, ServiceApi } from '@/domain/service'
import { Appointment, AppointmentApi } from '@/domain/appointment'
import { Booking, BookingApi } from '@/domain/booking'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function ManageBookingsPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Booking[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  useEffect(() => {
    async function fetchBookings() {
      try {
        const bookings = await BookingApi.findMany({
          includes: ['appointment', 'user'],
        })
        setItems(bookings)
      } catch (error) {
        toast.error('Failed to fetch bookings.')
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const handleBookingSelect = (booking: Booking) => {
    setSelectedBooking(booking)
  }

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    try {
      const updatedBooking = await BookingApi.updateOne(bookingId, {
        status: newStatus,
      })
      setItems(items.map((item) => (item.id === bookingId ? updatedBooking : item)))
      toast.success('Booking status updated successfully.')
    } catch (error) {
      toast.error('Failed to update booking status.')
    }
  }

  const handleCloseModal = () => {
    setSelectedBooking(null)
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items.length === 0 && (
            <MrbEmptyState>
              There are no bookings to display.
            </MrbEmptyState>
          )}
          {items.map((booking) => (
            <MrbCard
              key={booking.id}
              onClick={() => handleBookingSelect(booking)}
              className="m-1"
            >
              <MrbRow gap={2}>
                <MrbAvatar src={booking.user?.pictureUrl}>
                  {booking.user?.name}
                </MrbAvatar>
                <MrbDescriptionList orientation="horizontal">
                  <MrbDescription>
                    <MrbDescription.Label>Service</MrbDescription.Label>
                    <MrbDescription.Value>
                      {booking.appointment?.service?.name}
                    </MrbDescription.Value>
                  </MrbDescription>
                  <MrbDescription>
                    <MrbDescription.Label>Time</MrbDescription.Label>
                    <MrbDescription.Value>
                      {booking.appointment?.time}
                    </MrbDescription.Value>
                  </MrbDescription>
                  <MrbDescription>
                    <MrbDescription.Label>Status</MrbDescription.Label>
                    <MrbTag variant={booking.status === 'confirmed' ? 'success' : booking.status === 'cancelled' ? 'danger' : 'default'}>
                      {booking.status}
                    </MrbTag>
                  </MrbDescription>
                </MrbDescriptionList>
                <MrbRow horizontal="right" gap={1}>
                  <MrbButton
                    onClick={() => handleStatusChange(booking.id, 'confirmed')}
                  >
                    Confirm
                  </MrbButton>
                  <MrbButton
                    variant="danger"
                    onClick={() => handleStatusChange(booking.id, 'cancelled')}
                  >
                    Cancel
                  </MrbButton>
                  <MrbButton
                    variant="success"
                    onClick={() => handleStatusChange(booking.id, 'completed')}
                  >
                    Complete
                  </MrbButton>
                </MrbRow>
              </MrbRow>
            </MrbCard>
          ))}
        </>
      )}

      {selectedBooking && (
        <MrbModal
          isOpen={!!selectedBooking}
          onClose={handleCloseModal}
          header="Booking Details"
        >
          <MrbDescriptionList>
            <MrbDescription>
              <MrbDescription.Label>Client Name</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedBooking.user?.name}
              </MrbDescription.Value>
            </MrbDescription>
            <MrbDescription>
              <MrbDescription.Label>Service Booked</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedBooking.appointment?.service?.name}
              </MrbDescription.Value>
            </MrbDescription>
            <MrbDescription>
              <MrbDescription.Label>Appointment Time</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedBooking.appointment?.time}
              </MrbDescription.Value>
            </MrbDescription>
            <MrbDescription>
              <MrbDescription.Label>Status</MrbDescription.Label>
              <MrbDescription.Value>
                <MrbTag variant={selectedBooking.status === 'confirmed' ? 'success' : selectedBooking.status === 'cancelled' ? 'danger' : 'default'}>
                  {selectedBooking.status}
                </MrbTag>
              </MrbDescription.Value>
            </MrbDescription>
            <MrbDescription>
              <MrbDescription.Label>Contact Email</MrbDescription.Label>
              <MrbDescription.Value>
                {selectedBooking.user?.email}
              </MrbDescription.Value>
            </MrbDescription>
            {/* Additional details like special requests can be added here */}
          </MrbDescriptionList>
        </MrbModal>
      )}
    </PageLayout>
  )
}