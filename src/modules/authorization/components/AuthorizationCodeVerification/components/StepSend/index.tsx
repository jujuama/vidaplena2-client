import { MrbButton, MrbTypography } from '@/designSystem'
import { User } from '@/domain'
import React from 'react'

interface Props {
  user: User
  isLoading: boolean
  onClick: () => void
}

export const StepSend: React.FC<Props> = ({ user, isLoading, onClick }) => {
  return (
    <>
      <MrbTypography>
        A verification code will be sent to {user.email}
      </MrbTypography>

      <div>
        <MrbButton variant="primary" onClick={onClick} isLoading={isLoading}>
          Send
        </MrbButton>
      </div>
    </>
  )
}
