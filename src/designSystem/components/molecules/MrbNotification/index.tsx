import {
  MrbAvatar,
  MrbButton,
  MrbCol,
  MrbIcon,
  MrbRow,
  MrbTypography,
} from '@/designSystem'
import React, { MouseEvent } from 'react'
import { DateLibrary } from '../../../helpers/date'
import { PropsHTML, Styled } from './styled'

type Notification = {
  title: string
  message: string
  senderName?: string
  senderEmail?: string
  senderPictureUrl?: string
  dateCreated: string
}

interface Props extends PropsHTML {
  notification: Notification
  isPreview?: boolean
  onClick?: (notification: Notification) => void
  onDelete?: (notification: Notification) => void
}

const { Wrapper, BackgroundBlur, Content } = Styled

export const MrbNotification: React.FC<Props> = ({
  notification,
  onClick,
  onDelete,
  isPreview = false,
  ...props
}) => {
  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    onDelete(notification)
  }

  const lines = isPreview ? 2 : undefined

  return (
    <Wrapper
      {...props}
      onClick={() => onClick(notification)}
      $isPreview={isPreview}
    >
      <BackgroundBlur />
      <Content>
        <MrbRow gap={2} vertical="center" className="mrb-fill-y">
          <MrbCol vertical="center">
            <MrbAvatar src={notification.senderPictureUrl}>
              {notification.senderName}
            </MrbAvatar>
          </MrbCol>

          <MrbCol xs="fill" vertical="center">
            <MrbRow horizontal="between">
              <MrbTypography variant="secondary">
                {notification.title}
              </MrbTypography>
              <MrbTypography
                variant="caption"
                title={DateLibrary.toHuman(notification.dateCreated)}
              >
                {DateLibrary.timeAgo(notification.dateCreated)}
              </MrbTypography>
            </MrbRow>
            <MrbTypography lines={lines}>{notification.message}</MrbTypography>
          </MrbCol>

          {onDelete && (
            <MrbCol>
              <MrbButton variant="plain" onClick={handleDelete} noPadding>
                <MrbIcon name="close" />
              </MrbButton>
            </MrbCol>
          )}
        </MrbRow>
      </Content>
    </Wrapper>
  )
}
