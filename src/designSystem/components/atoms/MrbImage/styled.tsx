import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface PropsHTML extends ImgHTMLAttributes<HTMLImageElement> {}

export type Size = 'small' | 'medium' | 'large' | 'fill'
export type Shape = 'square' | 'rounded' | 'circle'

type PropsStyle = { $size: Size; $shape: Shape }

const getSize = ({ $size }: PropsStyle): string => {
  switch ($size) {
    case 'small':
      return `
        width: 100px;
        height: auto;
      `
    case 'medium':
      return `
        width: 200px;
        height: auto;
      `
    case 'large':
      return `
        width: 300px;
        height: auto;
      `
    default:
      return `
        width: 100%;
        height: auto;
      `
  }
}

const getShape = ({ $shape }: PropsStyle): string => {
  switch ($shape) {
    case 'square':
      return `
      `
    case 'rounded':
      return `
        border-radius: 10px;
      `
    case 'circle':
      return `
      border-radius: 50%;
      `
    default:
      return `
      `
  }
}

const Wrapper = styled.img<PropsStyle>`
  ${getSize}
  ${getShape}
`

export const Styled = {
  Wrapper,
}
