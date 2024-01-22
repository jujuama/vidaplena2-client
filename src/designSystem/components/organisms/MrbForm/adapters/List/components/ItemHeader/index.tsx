import { MrbButton, MrbIcon, MrbRow } from '../../../../../../../'

interface Props {
  index: number
  onDelete: () => void
}

export const ItemHeader: React.FC<Props> = ({ index, onDelete }) => {
  return (
    <MrbRow horizontal="right">
      <MrbButton variant="plain" noPadding size="small" onClick={onDelete}>
        <MrbIcon name="trash" />
      </MrbButton>
    </MrbRow>
  )
}
