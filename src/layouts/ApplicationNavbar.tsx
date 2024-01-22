import { RouterObject } from '@/core/router'
import { useCoreStore } from '@/core/store'
import { MrbAvatar, MrbBadge, MrbIcon, MrbNavbar, MrbRow, MrbTag } from '@/designSystem'
import { useAuthentication } from '@/modules/authentication'
import React from 'react'

export const ApplicationNavbar: React.FC = () => {
  const oneLetterLogoName = 'Vida Plena 2'.charAt(0).toUpperCase()

  const authentication = useAuthentication()

  const store = useCoreStore()

  const user = authentication.user

  const countNotifications = store.notifications.length

  return (
    <MrbNavbar>
      <MrbNavbar.Logo
        to={RouterObject.route.HOME}
        urlLogo="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/msk3CF-vidaplena2-a92f"
        className="mr-5"
      >
        {oneLetterLogoName}
      </MrbNavbar.Logo>

      <MrbRow className="mrb-fill-flex" gap={1}>

<MrbNavbar.Link to="/search">
          Search Businesses & Appointments
        </MrbNavbar.Link>

<MrbNavbar.Link to="/search-results">
          Search Results
        </MrbNavbar.Link>

<MrbNavbar.Link to="/my-appointments">
          My Appointments
        </MrbNavbar.Link>

<MrbNavbar.Link to="/my-favorites">
          My Favorites
        </MrbNavbar.Link>

<MrbNavbar.Link to="/business-setup">
          Business Setup
        </MrbNavbar.Link>

<MrbNavbar.Link to="/manage-services">
          Services
        </MrbNavbar.Link>

<MrbNavbar.Link to="/manage-appointments">
          Manage Appointments
        </MrbNavbar.Link>

<MrbNavbar.Link to="/manage-bookings">
          Manage Bookings
        </MrbNavbar.Link>

<MrbNavbar.Link to="/analytics">
          Analytics
        </MrbNavbar.Link>

<MrbNavbar.Link to="/invite-user">
          Invite User
        </MrbNavbar.Link>

</MrbRow>

      {store.isAdmin && (
        <MrbNavbar.Item>
          <MrbTag variant="primary">
            <MrbIcon name="user-star-fill" className="mr-1" />
            Admin
          </MrbTag>
        </MrbNavbar.Item>
      )}

      <MrbNavbar.Link to={RouterObject.route.NOTIFICATIONS}>
        <MrbBadge content={countNotifications} variant="danger">
          <MrbIcon name="notification-2" />
        </MrbBadge>
      </MrbNavbar.Link>

      <MrbNavbar.Avatar to={RouterObject.route.PROFILE}>
        <MrbAvatar src={user?.pictureUrl}>{user?.name}</MrbAvatar>
      </MrbNavbar.Avatar>
    </MrbNavbar>
  )
}
