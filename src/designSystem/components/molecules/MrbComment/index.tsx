'use client'

import { DateLibrary } from '@/designSystem/helpers/date'
import { MrbAvatar, MrbCol, MrbRow, MrbTypography } from '../..'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbComment
 * @example example.txt
 * @description A comment component to display a comment.
 * @prop {string} name - The name of the user @required
 * @prop {string} pictureUrl - The profile picture of the user if any
 * @prop {string} date - The date of the comment
 * @prop {number} content - The content of the comment @required
 */

interface Props extends PropsHTML {
  name: string
  content: string
  date?: string
  pictureUrl?: string
}

export const MrbComment: MrbComponent<Props, typeof Styled> = ({
  name,
  content,
  date,
  pictureUrl,
  ...props
}) => {
  return (
    <MrbRow gap={2} vertical="center" className="mrb-fill-x">
      <MrbAvatar src={pictureUrl}>{name}</MrbAvatar>
      <MrbCol xs="fill">
        <MrbRow vertical="center" horizontal="between">
          <MrbTypography>{name} </MrbTypography>
          <MrbTypography variant="caption">
            {date ? DateLibrary.toHuman(date) : ''}
          </MrbTypography>
        </MrbRow>
        <MrbTypography variant="secondary">{content}</MrbTypography>
      </MrbCol>
    </MrbRow>
  )
}

MrbComment.Styled = Styled
