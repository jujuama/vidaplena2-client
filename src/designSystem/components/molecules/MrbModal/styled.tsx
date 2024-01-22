import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

const ThemeModal = Theme.components?.modal

export type Width = 'small' | 'medium' | 'large'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

interface PropsStyle {
  $isExpanded: boolean
}

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`

const ModalWrapper = styled.div`
  z-index: 101;
  color: ${Theme.textPrimary};
  box-shadow: ${ThemeModal?.boxShadow};
  border: ${ThemeModal?.border};
  border-radius: ${Theme.borderRadius};
  overflow-y: auto;
  background: ${ThemeModal?.background || Theme.ui_1};
  width: 100%;
`

const Header = styled.div`
  font-size: ${Theme.textSize_xl};
`

const Content = styled.div``

const Footer = styled.div``

const Wrapper = styled.div<PropsStyle>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  ${({ $isExpanded }) =>
    $isExpanded &&
    `
      & ${ModalWrapper} {
        height: 100%;
      }
    `}
`

export const Styled = {
  Wrapper,
  Header,
  Footer,
  Content,
  Background,
  ModalWrapper,
}
