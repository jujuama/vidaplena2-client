import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

type Orientation = 'horizontal' | 'vertical'

type PropsStyle = {
  $columns?: number
  $orientation: Orientation
}

const getGrid = ({ $orientation, $columns }: PropsStyle) => {
  if ($orientation === 'vertical') {
    return `
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: ${Theme.space_2};
    `
  } else {
    return `
      display: grid;
      flex-direction: row;
      grid-template-columns: repeat(auto-fit, minmax(100px, calc(100% / ${$columns} - 10px)));
      grid-auto-rows: minmax(auto, max-content); 
      gap: ${Theme.space_2};
    `
  }
}

const Wrapper = styled.div<PropsStyle>`
  ${getGrid}
`

export const Styled = {
  Wrapper,
}
