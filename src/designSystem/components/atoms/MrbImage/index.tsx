'use client'

import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Shape, Size, Styled } from './styled'

/**
 * @component MrbImage
 * @example example.txt
 * @description An image component useful when you have a cover picture, a logo, an image, a thumbnail to display
 * @prop {'small' | 'medium' | 'large' | 'fill'} size - The size of the image, default is full width
 * @prop {string} src - The url of the image @required
 */

interface Props extends PropsHTML {
  src: string
  shape?: Shape
  size?: Size
}

const { Wrapper } = Styled

export const MrbImage: MrbComponent<Props, typeof Styled> = ({
  size = 'medium',
  shape = 'rounded',
  ...props
}) => {
  return <Wrapper {...props} $size={size} $shape={shape} />
}

MrbImage.Styled = Styled
