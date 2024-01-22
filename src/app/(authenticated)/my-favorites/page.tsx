'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { MrbButton, MrbCol, MrbEmptyState, MrbList, MrbLoader, MrbRow, MrbTypography } from '@/designSystem'
import { User, UserApi } from '@/domain/user'

import { Business, BusinessApi } from '@/domain/business'

import { Favorite, FavoriteApi } from '@/domain/favorite'
import {MrbToast} from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import { DateLibrary } from '@/libraries/date'
import { AiApi } from '@/domain/ai'
import { PageLayout } from '@/layouts/Page.layout'

export default function MyFavoritesPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const toast = MrbToast.useToast()
  const userId = authentication.user?.id

  const [isLoading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Favorite[]>([])

  useEffect(() => {
    if (userId) {
      FavoriteApi.findManyByUserId(userId, { includes: ['business'] })
        .then(favorites => {
          setItems(favorites)
          setLoading(false)
        })
        .catch(error => {
          toast.error('Failed to fetch favorites.')
          setLoading(false)
        })
    }
  }, [userId])

  const handleRemoveFavorite = async (favoriteId: string) => {
    await FavoriteApi.deleteOne(favoriteId)
    setItems(items.filter(item => item.id !== favoriteId))
    toast.success('Favorite removed successfully.')
  }

  const handleViewBusiness = (businessId: string) => {
    router.push(`/business/${businessId}`)
  }

  return (
    <PageLayout layout="narrow">
      {isLoading && <MrbLoader size="large" isExpanded />}

      {!isLoading && (
        <>
          {items.length === 0 && (
            <MrbEmptyState>
              You have no favorite businesses yet.
            </MrbEmptyState>
          )}
          <MrbList divider={false}>
            {items.map(item => (
              <MrbList.Item key={item.id}>
                <MrbRow gap={2} className="mrb-fill-x">
                  <MrbCol xs="fill">
                    <MrbTypography variant="h3">
                      {item.business?.name}
                    </MrbTypography>
                    <MrbTypography variant="primary">
                      {item.business?.city}
                    </MrbTypography>
                    <MrbTypography variant="secondary">
                      {item.business?.type}
                    </MrbTypography>
                  </MrbCol>
                  <MrbCol>
                    <MrbRow horizontal="right" gap={1}>
                      <MrbButton
                        variant="primary"
                        onClick={() => handleViewBusiness(item.businessId)}
                      >
                        View
                      </MrbButton>
                      <MrbButton
                        variant="danger"
                        onClick={() => handleRemoveFavorite(item.id)}
                      >
                        Remove
                      </MrbButton>
                    </MrbRow>
                  </MrbCol>
                </MrbRow>
              </MrbList.Item>
            ))}
          </MrbList>
          {items.length > 3 && (
            <MrbButton
              onClick={() => {
                // Implement show more functionality
              }}
            >
              Show More
            </MrbButton>
          )}
        </>
      )}
    </PageLayout>
  )
}