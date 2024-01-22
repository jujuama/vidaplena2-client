'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { Utility } from '../../../helpers/utility'
import { Color, PropsHTML, Size, Styled } from './styled'

/**
 * @component MrbAvatar
 * @example example.txt
 * @description The Avatar component is used to represent user, and displays the profile picture or their initials
 * @prop {ReactNode} children - The name of the user or any label @required
 * @prop {string} src - The url of the picture. If not provided, the Avatar fallback on the children
 */

interface Props extends PropsHTML {
  children?: ReactNode
  size?: Size
  color?: Color
  src?: string
}

const { Wrapper, Content, Picture } = Styled

export const MrbAvatar: MrbComponent<Props, typeof Styled> = ({
  size = 'medium',
  color,
  src,
  children,
  ...props
}) => {
  const getColorName = (): Color => {
    const names: Color[] = [
      'blue',
      'green',
      'orange',
      'pink',
      'purple',
      'grey',
      'red',
      'yellow',
      'lightgreen',
      'cyan',
      'lavender',
      'salmon',
      'darkgrey',
      'darkblue',
    ]

    if (color) {
      return color
    }

    const isString = typeof children === 'string'

    if (isString) {
      const index = Utility.stringToNumber(children, names.length)

      return names[index]
    }

    return 'blue'
  }

  const getContent = (children: ReactNode): ReactNode => {
    const isString = typeof children === 'string'

    if (!isString) {
      return children
    }

    if (src) {
      return <Picture src={src} />
    }

    return Utility.stringToInitials(children)
  }

  return (
    <Wrapper {...props} $color={getColorName()} $size={size}>
      <Content>{getContent(children)}</Content>
    </Wrapper>
  )
}

MrbAvatar.Styled = Styled
