import {
  MrbButton,
  MrbCol,
  MrbModal,
  MrbRow,
  MrbTypography,
} from '@/designSystem'
import { User } from '@/domain'
import { AuthorizationHook, AuthorizationType } from '@/domain/authorization'
import React from 'react'
import { ErrorAlert } from './components/ErrorAlert'
import { StepCodeInput } from './components/StepCodeInput'
import { StepSend } from './components/StepSend'
import { StepSuccess } from './components/StepSuccess'

interface Props {
  user: User
  title: string
  type: AuthorizationType
  onComplete: () => void
  onCancel: () => void
}

export const AuthorizationCodeVerification: React.FC<Props> = ({
  title,
  type,
  user,
  onComplete,
  onCancel,
}) => {
  const {
    isSent,
    isVerified,
    send,
    verify,
    isLoadingSend,
    isLoadingVerify,
    errors,
  } = AuthorizationHook.useCode({ type, user })

  const handleSend = () => {
    send()
  }

  const handleCodeSubmit = (keyPrivate: string) => {
    verify(keyPrivate)
  }

  const handleClickContinue = () => {
    onComplete()
  }

  const isStepSend = !isSent && !isVerified
  const isStepInput = isSent && !isVerified
  const isStepSuccess = isSent && isVerified

  const hasErrors = errors.length > 0

  return (
    <>
      <MrbModal
        isOpen={true}
        footer={
          <MrbRow horizontal="center">
            <MrbButton onClick={onCancel} variant="secondary">
              Cancel
            </MrbButton>
          </MrbRow>
        }
      >
        <MrbCol horizontal="center" gap={3}>
          <MrbTypography variant="h2">{title}</MrbTypography>

          {isStepSend && (
            <StepSend
              user={user}
              isLoading={isLoadingSend}
              onClick={handleSend}
            />
          )}

          {isStepInput && (
            <StepCodeInput
              user={user}
              isLoadingSend={isLoadingSend}
              isLoadingSubmit={isLoadingVerify}
              onSubmit={handleCodeSubmit}
              onClickSend={handleSend}
            />
          )}

          {isStepSuccess && <StepSuccess onContinue={handleClickContinue} />}

          {hasErrors && <ErrorAlert messages={errors} />}
        </MrbCol>
      </MrbModal>
    </>
  )
}
