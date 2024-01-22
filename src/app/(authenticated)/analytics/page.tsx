'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbEmptyState, MrbGrid, MrbGridItem, MrbLoader, MrbTypography, MrbForm } from '@/designSystem'
import { Business, BusinessApi } from '@/domain/business'
import { Service, ServiceApi } from '@/domain/service'
import { Appointment, AppointmentApi } from '@/domain/appointment'
import { Booking, BookingApi } from '@/domain/booking'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function BusinessAnalyticsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [analyticsData, setAnalyticsData] = useState<any>(null)

  useEffect(() => {
    async function fetchAnalyticsData() {
      try {
        setLoading(true)
        // Assuming there are API functions to fetch analytics data
        const businessData = await BusinessApi.findManyByOwnerId(userId)
        const serviceData = await ServiceApi.findManyByBusinessId(userId)
        const appointmentData = await AppointmentApi.findManyByBusinessId(userId)
        const bookingData = await BookingApi.findManyByAppointmentId(userId)
        setAnalyticsData({
          businessData,
          serviceData,
          appointmentData,
          bookingData,
        })
      } catch (error) {
        toast.error('Failed to fetch analytics data')
      } finally {
        setLoading(false)
      }
    }

    if (userId) {
      fetchAnalyticsData()
    }
  }, [userId])

  const handleFilterSubmit = (values: any) => {
    // Implement the filter logic here
    // For example, filter the analyticsData based on the values
    console.log('Filter values:', values)
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && analyticsData && (
        <>
          <MrbForm
            onSubmit={handleFilterSubmit}
            inputs={[
              {
                key: 'dateRange',
                type: 'date',
                label: 'Date Range',
              },
              {
                key: 'serviceType',
                type: 'select',
                label: 'Service Type',
                options: analyticsData.serviceData.map((service: any) => ({
                  label: service.name,
                  value: service.id,
                })),
              },
            ]}
          >
            <MrbButton type="submit">Apply Filters</MrbButton>
          </MrbForm>

          <MrbGrid gap={2}>
            {/* Example of displaying a metric */}
            <MrbGridItem xs={12} sm={6} md={4} lg={3} xl={3}>
              <MrbCard>
                <MrbCard.Body>
                  <MrbTypography variant="h3">Number of Bookings</MrbTypography>
                  <MrbTypography variant="primary">{analyticsData.bookingData.length}</MrbTypography>
                </MrbCard.Body>
              </MrbCard>
            </MrbGridItem>

            {/* Add other metrics here using MrbCard, MrbTypography, MrbGrid, and MrbGridItem */}
          </MrbGrid>
        </>
      )}

      {!isLoading && !analyticsData && (
        <MrbEmptyState>
          There is no analytics data to be displayed.
        </MrbEmptyState>
      )}
    </PageLayout>
  )
}