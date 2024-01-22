import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

export type Size = 'small' | 'medium' | 'large'

const Loader = styled.svg<{ $size: string; $thickness: string }>`
  display: inline;

  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  border-radius: 50%;
  border: ${({ $thickness }) => $thickness} solid ${Theme.colorPrimary};
  border-right-color: transparent;

  animation: rotateSpinner 800ms linear infinite;

  @keyframes rotateSpinner {
    to {
      transform: rotate(360deg);
    }
  }
`

const Wrapper = styled.div<{ $isExpanded: boolean }>`
  ${({ $isExpanded }) =>
    $isExpanded
      ? `
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      `
      : `
        display: inline;
      `}
`

export const Styled = {
  Wrapper,
  Loader,
}
