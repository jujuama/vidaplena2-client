'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbDescription, MrbButton, MrbCol, MrbList, MrbLoader, MrbRow, MrbTypography, MrbDescriptionList } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Business, BusinessApi } from '@/domain/business'

import { Appointment, AppointmentApi } from '@/domain/appointment'

import { Favorite, FavoriteApi } from '@/domain/favorite'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function BusinessDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [business, setBusiness] = useState<Business | null>(null)

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const businessDetails = await BusinessApi.findOne(params.id, {
          includes: ['services', 'appointments'],
        })
        setBusiness(businessDetails)
      } catch (error) {
        toast.error('Failed to fetch business details.')
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchBusinessDetails()
    }
  }, [params.id])

  const addToFavorites = async () => {
    if (userId && business?.id) {
      try {
        await FavoriteApi.createOneByUserId(userId, { businessId: business.id })
        toast.success('Business added to favorites.')
      } catch (error) {
        toast.error('Failed to add business to favorites.')
      }
    }
  }

  const bookAppointment = (appointmentId: string) => {
    router.push(`/book-appointment/${appointmentId}`)
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && business && (
        <MrbCard>
          <MrbCard.Body>
            <MrbRow horizontal="center">
              <MrbTypography variant="h3">{business.name}</MrbTypography>
            </MrbRow>
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
            <MrbList>
              {business.services?.map((service) => (
                <MrbList.Item key={service.id}>
                  <MrbRow gap={2} vertical="center">
                    <MrbCol xs="fill">
                      <MrbTypography>{service.name}</MrbTypography>
                      <MrbTypography variant="secondary">{service.description}</MrbTypography>
                    </MrbCol>
                    {service.appointments?.map((appointment) => (
                      <MrbButton key={appointment.id} onClick={() => bookAppointment(appointment.id)}>
                        Book at {appointment.time}
                      </MrbButton>
                    ))}
                  </MrbRow>
                </MrbList.Item>
              ))}
            </MrbList>
          </MrbCard.Body>
          <MrbCard.Footer>
            <MrbRow horizontal="right" gap={1}>
              <MrbButton onClick={addToFavorites}>Add to Favorites</MrbButton>
            </MrbRow>
          </MrbCard.Footer>
        </MrbCard>
      )}
    </PageLayout>
  )
}