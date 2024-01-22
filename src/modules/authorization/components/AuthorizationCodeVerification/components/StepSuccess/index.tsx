import { MrbButton, MrbTypography } from '@/designSystem'
import React from 'react'

interface Props {
  onContinue: () => void
}

export const StepSuccess: React.FC<Props> = ({ onContinue }) => {
  return (
    <>
      <MrbTypography>Verification completed</MrbTypography>

      <div>
        <MrbButton variant="success" onClick={onContinue}>
          Continue
        </MrbButton>
      </div>
    </>
  )
}
