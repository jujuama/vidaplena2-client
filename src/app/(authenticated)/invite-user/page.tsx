'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbCard, MrbButton, MrbTypography, MrbForm } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { BusinessUser, BusinessUserApi } from '@/domain/businessUser'

import { Business, BusinessApi } from '@/domain/business'

import { BusinessUserRole, BusinessUserRoleApi } from '@/domain/businessUserRole'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function InviteUserPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const businessId = params.id // Assuming the business ID is in the URL params

  const [isLoading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      await BusinessUserRoleApi.createOneByBusinessId(businessId, {
        userId: values.email, // Assuming the email is used as the user ID
        role: values.role,
      })
      toast.success('Invitation sent successfully')
      router.push('/manage-users') // Assuming this is the correct path for the 'Manage Users' page
    } catch (error) {
      toast.error('Failed to send invitation')
    }
    setLoading(false)
  }

  return (
    <PageLayout layout="narrow">
      <MrbTypography variant="h1">Invite User</MrbTypography>
      <MrbCard size="full-width" className="m-2">
        <MrbCard.Body>
          <MrbForm
            onSubmit={handleSubmit}
            inputs={[
              {
                key: 'email',
                type: 'email',
                label: 'Email Address',
              },
              {
                key: 'role',
                type: 'select',
                label: 'Role',
                options: [
                  { label: 'Admin', value: 'admin' },
                  { label: 'Editor', value: 'editor' },
                  { label: 'Read-Only', value: 'read-only' },
                ],
              },
            ]}
          >
            <MrbButton variant="primary" type="submit" isLoading={isLoading}>
              Send Invitation
            </MrbButton>
          </MrbForm>
        </MrbCard.Body>
      </MrbCard>
    </PageLayout>
  )
}