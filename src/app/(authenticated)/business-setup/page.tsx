'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbLink, MrbTypography, MrbForm } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Business, BusinessApi } from '@/domain/business'
import { Service, ServiceApi } from '@/domain/service'
import { Appointment, AppointmentApi } from '@/domain/appointment'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function BusinessSetupPage() {
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (values) => {
    if (!userId) {
      toast.error('User ID is not available.')
      return
    }

    setLoading(true)
    try {
      await BusinessApi.createOneByOwnerId(userId, {
        name: values.businessName,
        city: values.city,
        type: values.type,
      })
      toast.success('Business profile created successfully.')
      setLoading(false)
    } catch (error) {
      toast.error('Failed to create business profile.')
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="narrow">
      <MrbTypography variant="h1">Business Setup</MrbTypography>
      <MrbCard size="full-width" className="m-2">
        <MrbCard.Body>
          <MrbForm
            onSubmit={handleSubmit}
            inputs={[
              {
                key: 'businessName',
                type: 'text',
                label: 'Business Name',
              },
              {
                key: 'city',
                type: 'text',
                label: 'City',
              },
              {
                key: 'type',
                type: 'text',
                label: 'Business Type',
              },
            ]}
          >
            <MrbButton variant="primary" type="submit" isLoading={isLoading}>
              Create
            </MrbButton>
          </MrbForm>
          <div style={{ marginTop: '20px' }}>
            <MrbLink to="/manage-services" variant="primary">Manage Services</MrbLink>
            <MrbLink to="/manage-appointments" variant="primary">Manage Appointments</MrbLink>
            <MrbLink to="/analytics" variant="primary">Analytics</MrbLink>
          </div>
        </MrbCard.Body>
      </MrbCard>
    </PageLayout>
  )
}