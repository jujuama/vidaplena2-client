import React from 'react'
import { MrbButton, MrbRow } from '../../../../atoms'

interface Props {
  onClose: () => void
}

export const FooterDefault: React.FC<Props> = ({ onClose }) => {
  return (
    <MrbRow horizontal="right">
      <MrbButton onClick={onClose}>Close</MrbButton>
    </MrbRow>
  )
}
