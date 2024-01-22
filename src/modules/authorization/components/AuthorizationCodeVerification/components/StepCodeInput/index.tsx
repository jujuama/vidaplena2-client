import {
  MrbButton,
  MrbForm,
  MrbFormInputConfiguration,
  MrbTypography,
} from '@/designSystem'
import { User } from '@/domain'
import React from 'react'

interface Props {
  user: User
  isLoadingSubmit: boolean
  isLoadingSend: boolean
  onClickSend: () => void
  onSubmit: (keyPrivate: string) => void
}

export const StepCodeInput: React.FC<Props> = ({
  user,
  isLoadingSubmit,
  isLoadingSend,
  onSubmit,
  onClickSend,
}) => {
  const inputs: MrbFormInputConfiguration[] = [
    {
      type: 'text',
      key: 'code',
      props: {
        placeholder: 'XXXXXXXX',
      },
    },
  ]

  const handleSubmit = ({ code }) => {
    onSubmit(code)
  }

  return (
    <>
      <MrbTypography>Enter the code sent to {user.email}</MrbTypography>

      <MrbForm inputs={inputs} onSubmit={handleSubmit}>
        <MrbButton
          variant="primary"
          fullWidth
          type="submit"
          isLoading={isLoadingSubmit}
        >
          Verify
        </MrbButton>

        <MrbButton
          variant="secondary"
          fullWidth
          isLoading={isLoadingSend}
          onClick={onClickSend}
        >
          Send Again
        </MrbButton>
      </MrbForm>
    </>
  )
}
