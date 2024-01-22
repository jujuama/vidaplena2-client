import { ReactNode } from 'react'
import styled from 'styled-components'
import { MrbContextProvider } from '../../../providers'
import { Theme } from '../../../theme'

const ThemeHtml = Theme.components.html

const Html = styled.html`
  color: ${ThemeHtml.color};
  background: ${ThemeHtml.background};
  font-size: ${Theme.textSize_md};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

const Body = styled.body`
  margin: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  & * {
    box-sizing: border-box;
  }
`

interface Props {
  children: ReactNode
}

export const MrbHtml: React.FC<Props> = ({ children }: Props) => {
  return (
    <Html lang="en">
      <Body>
        <MrbContextProvider>{children}</MrbContextProvider>
      </Body>
    </Html>
  )
}
