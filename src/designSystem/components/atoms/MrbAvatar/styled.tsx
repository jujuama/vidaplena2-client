import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export type Size = 'small' | 'medium' | 'large'
export type Color =
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'pink'
  | 'grey'
  | 'red'
  | 'yellow'
  | 'lightgreen'
  | 'cyan'
  | 'lavender'
  | 'salmon'
  | 'darkgrey'
  | 'darkblue'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface PropsStyle {
  $size: Size
  $color: Color
}

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Picture = styled.img`
  height: 100%;
`

const getSize = ({ $size }: PropsStyle) => {
  switch ($size) {
    default:
      return `
        height: ${Theme.space_5};  
        width: ${Theme.space_5};  

        ${Content} {
          font-size: ${Theme.textSize_md};
        }
      `
    case 'small':
      return `
        height: ${Theme.space_4};  
        width: ${Theme.space_4};  

        ${Content} {
          font-size: ${Theme.textSize_sm};
        }
      `
    case 'large':
      return `
        height: calc(${Theme.space_5} * 1.5);  
        width: calc(${Theme.space_5} * 1.5);  

        ${Content} {
          font-size: ${Theme.textSize_lg};
        }
      `
  }
}

/* -------------------------------- VARIANTS -------------------------------- */
const getVariant = ({ $color: $variant }: PropsStyle) => {
  switch ($variant) {
    case 'blue':
      return `
        color: white;  
        background: #007aff;  
      `
    case 'green':
      return `
        color: white;  
        background: #35c759;       
      `
    case 'orange':
      return `
        color: white;  
        background: #ff9500;        
      `
    case 'pink':
      return `
        color: white;  
        background: #ff5dff;        
      `
    case 'purple':
      return `
        color: white;  
        background: #7d4fff;     
      `
    case 'grey':
      return `
        color: white;
        background: #c6c4c4;
      `
    case 'red':
      return `
        color: white;
        background: #f06a6a;
      `
    case 'yellow':
      return `
        color: white;
        background: #f8df72;
      `
    case 'lightgreen':
      return `
        color: white;
        background: #b3df97;
      `
    case 'cyan':
      return `
        color: white;
        background: #9ee7e3;
      `
    case 'lavender':
      return `
        color: white;
        background: #a69ff3;
      `
    case 'salmon':
      return `
        color: white;
        background: #fc979a;
      `
    case 'darkgrey':
      return `
        color: white;
        background: #6d6e6f;
      `
    case 'darkblue':
      return `
        color: white;
        background: #446fcb;
      `
  }
}

/* --------------------------------- WRAPPER -------------------------------- */

const Wrapper = styled.div<PropsStyle>`
  border-radius: 50%;
  font-weight: normal;
  overflow: hidden;
  display: inline-block;
  text-transform: uppercase;

  ${getVariant}
  ${getSize}
`

export const Styled = {
  Wrapper,
  Picture,
  Content,
}
