'use client'

import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Size, Styled } from './styled'

/**
 * @component MrbLoader
 * @example example.txt
 * @description Shows an animation to indicate that something is loading.
 * @prop {'small' | 'medium' | 'large'} size - The size of the loader.
 * @prop {boolean} isExpanded - Takes the full width and height available and center the loader.
 */
interface Props extends PropsHTML {
  size?: Size
  isExpanded?: boolean
}

const { Wrapper, Loader } = Styled

export const MrbLoader: MrbComponent<Props, typeof Styled> = ({
  size = 'small',
  isExpanded = false,
  ...props
}) => {
  const sizeMapping: Record<Size, string> = {
    small: '20px',
    medium: '32px',
    large: '64px',
  }

  const thicknessMapping: Record<Size, string> = {
    small: '3px',
    medium: '4px',
    large: '5px',
  }

  const sizeMapped = sizeMapping[size] ?? sizeMapping['small']
  const thicknessMapped = thicknessMapping[size] ?? thicknessMapping['small']

  return (
    <Wrapper {...props} $isExpanded={isExpanded}>
      <Loader $size={sizeMapped} $thickness={thicknessMapped} />
    </Wrapper>
  )
}

MrbLoader.Styled = Styled
