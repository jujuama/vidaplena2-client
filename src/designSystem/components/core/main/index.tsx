import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MrbSplashScreen } from '..'
import { Theme } from '../../../theme'

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: ${Theme.ui_3};
  color: ${Theme.textPrimary};
`

interface Props {
  name: string
  children: ReactNode
}

export const MrbMain: React.FC<Props> = ({ name, children }: Props) => {
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (isLoading) {
      setLoading(false)
    }
  }, [])

  return <Main>{isLoading ? <MrbSplashScreen name={name} /> : children}</Main>
}
