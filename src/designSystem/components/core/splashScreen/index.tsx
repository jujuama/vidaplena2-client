import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MrbTypography } from '../..'
import { Theme } from '../../../theme'

const Wrapper = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Theme.ui_1};
  margin: auto;
`

interface Props {
  name: string
}

export const MrbSplashScreen: React.FC<Props> = ({ name }: Props) => {
  const [isPageInitialised, setPageInitialised] = useState(false)

  useEffect(() => {
    setPageInitialised(true)
  }, [])

  if (!isPageInitialised) {
    return <></>
  }

  return (
    <Wrapper>
      <MrbTypography style={{ letterSpacing: '3px' }}>{name}</MrbTypography>
    </Wrapper>
  )
}
