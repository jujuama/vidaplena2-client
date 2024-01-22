'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbButton, MrbCol, MrbEmptyState, MrbLink, MrbList, MrbLoader, MrbRow, MrbTypography } from '@/designSystem'
import { Business, BusinessApi } from '@/domain/business'

import { Appointment, AppointmentApi } from '@/domain/appointment'
import { Booking, BookingApi } from '@/domain/booking'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function SearchResultsPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const results = await BusinessApi.findMany({
          includes: ['owner', 'services', 'appointments'],
        })
        setItems(results)
      } catch (error) {
        toast.error('Failed to fetch search results.')
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  const handleBooking = async (appointmentId: string) => {
    try {
      if (userId) {
        await BookingApi.createOneByAppointmentId(appointmentId, {
          userId,
        })
        toast.success('Booking successful.')
      } else {
        toast.error('You must be logged in to book an appointment.')
      }
    } catch (error) {
      toast.error('Failed to create booking.')
    }
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items?.length === 0 && (
            <MrbEmptyState>
              There are no items to display.
            </MrbEmptyState>
          )}
          <MrbList divider={false}>
            {items?.map(item => (
              <MrbList.Item key={item.id}>
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbTypography variant="h3">
                      <MrbLink to={`/business/${item.id}`} variant="primary">
                        {item.name}
                      </MrbLink>
                    </MrbTypography>
                    {item.services?.map(service => (
                      <div key={service.id}>
                        <MrbTypography>
                          <MrbLink to={`/appointment/${service.id}`} variant="primary">
                            {service.name}
                          </MrbLink>
                        </MrbTypography>
                        {service.appointments?.map(appointment => (
                          <MrbRow key={appointment.id} horizontal="right" gap={1}>
                            <MrbTypography>{appointment.time}</MrbTypography>
                            <MrbButton
                              onClick={() => handleBooking(appointment.id)}
                            >
                              Book Now
                            </MrbButton>
                          </MrbRow>
                        ))}
                      </div>
                    ))}
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