import React from 'react'
import { MrbButton, MrbIcon } from '../../../../../../../'

interface Props {
  onClick: () => void
}

export const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <MrbButton variant="plain" noPadding onClick={onClick}>
      Add
      <MrbIcon name="add" />
    </MrbButton>
  )
}
