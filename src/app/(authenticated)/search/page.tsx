'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbDescription, MrbButton, MrbEmptyState, MrbList, MrbLoader, MrbTypography, MrbDescriptionList, MrbForm } from '@/designSystem'
import { Business, BusinessApi } from '@/domain/business'

import { Appointment, AppointmentApi } from '@/domain/appointment'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function SearchPage() {
  const router = useRouter()
  const toast = MrbToast.useToast()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<{ businesses: any[], appointments: any[] }>({ businesses: [], appointments: [] })

  const handleSearch = async (values: any) => {
    setLoading(true)
    try {
      const businesses = await BusinessApi.findMany({ filters: values })
      const appointments = await AppointmentApi.findMany({ filters: values })
      setSearchResults({ businesses, appointments })
    } catch (error) {
      toast.error('An error occurred while searching.')
    }
    setLoading(false)
  }

  return (
    <PageLayout layout="narrow">
      <MrbForm
        onSubmit={handleSearch}
        inputs={[
          { key: 'city', type: 'text', label: 'City' },
          { key: 'time', type: 'text', label: 'Time' },
          { key: 'date', type: 'date', label: 'Date' },
          { key: 'name', type: 'text', label: 'Business Name' },
          { key: 'type', type: 'text', label: 'Type' },
        ]}
      >
        <MrbButton type="submit">Search</MrbButton>
      </MrbForm>

      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {searchResults.businesses.length === 0 && searchResults.appointments.length === 0 && (
            <MrbEmptyState>
              No results found.
            </MrbEmptyState>
          )}
          <MrbList divider={false}>
            {searchResults.businesses.map(business => (
              <MrbCard key={business.id}>
                <MrbTypography variant="h3">{business.name}</MrbTypography>
                <MrbDescriptionList>
                  <MrbDescription>
                    <MrbDescription.Label>City</MrbDescription.Label>
                    <MrbDescription.Value>{business.city}</MrbDescription.Value>
                  </MrbDescription>
                  <MrbDescription>
                    <MrbDescription.Label>Type</MrbDescription.Label>
                    <MrbDescription.Value>{business.type}</MrbDescription.Value>
                  </MrbDescription>
                </MrbDescriptionList>
                <MrbButton onClick={() => router.push(`/business/${business.id}`)}>View Details</MrbButton>
              </MrbCard>
            ))}
            {searchResults.appointments.map(appointment => (
              <MrbCard key={appointment.id}>
                <MrbTypography variant="h3">{appointment.business?.name}</MrbTypography>
                <MrbDescriptionList>
                  <MrbDescription>
                    <MrbDescription.Label>Time</MrbDescription.Label>
                    <MrbDescription.Value>{appointment.time}</MrbDescription.Value>
                  </MrbDescription>
                  <MrbDescription>
                    <MrbDescription.Label>Date</MrbDescription.Label>
                    <MrbDescription.Value>{appointment.date}</MrbDescription.Value>
                  </MrbDescription>
                </MrbDescriptionList>
                <MrbButton onClick={() => router.push(`/appointment/${appointment.id}`)}>View Details</MrbButton>
                <MrbButton onClick={() => router.push(`/book-appointment/${appointment.id}`)}>Book Appointment</MrbButton>
              </MrbCard>
            ))}
          </MrbList>
        </>
      )}
    </PageLayout>
  )
}