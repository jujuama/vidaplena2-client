import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Theme } from '../../../theme'

export interface PropsHTML
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {}

type PropsStyle = {
  $isPreview: boolean
}

const ThemeNotification = Theme.components.notification

const BackgroundBlur = styled.div`
  position: absolute;
  border-radius: 16px;
  box-shadow: ${ThemeNotification.blur.boxShadow};
  backdrop-filter: blur(4px);
  height: 100%;
  width: 100%;
  z-index: -1;
`

const Content = styled.div`
  padding: ${Theme.space_2};
  background-color: ${ThemeNotification.background};
  width: 100%;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
`

const Wrapper = styled.div<PropsStyle>`
  position: relative;
  ${({ $isPreview }) => ($isPreview ? `width: 350px;` : `width: 100%;`)}
  height: 80px;
  border: ${ThemeNotification.border};
  border-radius: 10px;
  overflow: hidden;

  box-shadow: ${ThemeNotification.boxShadow};
`

export const Styled = {
  Wrapper,
  Content,
  BackgroundBlur,
}

/* From https://css.glass */
