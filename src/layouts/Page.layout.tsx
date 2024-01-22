import { MrbCol, MrbRow } from '@/designSystem'
import { styled } from 'styled-components'
import { ApplicationLeftbar } from './ApplicationLeftbar'
import { ApplicationNavbar } from './ApplicationNavbar'

type Layout = 'full-width' | 'narrow' | 'super-narrow'

type Breakpoints = {
  xs: number | string
  sm: number | string
  md: number | string
  lg: number | string
  xl: number | string
  xxl: number | string
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ContainerRow = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`

const ContainerScrollable = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

interface Props {
  children: React.ReactNode
  className?: string
  layout?: Layout
}

const getLayoutBreakpoints = (layout: Layout): Breakpoints => {
  const mapping: Record<Layout, Breakpoints> = {
    'full-width': {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      xxl: 12,
    },
    narrow: {
      xs: 12,
      sm: 12,
      md: 8,
      lg: 8,
      xl: 8,
      xxl: 6,
    },
    'super-narrow': {
      xs: 10,
      sm: 10,
      md: 6,
      lg: 6,
      xl: 6,
      xxl: 4,
    },
  }

  return mapping[layout] ?? mapping['full-width']
}

export const PageLayout: React.FC<Props> = ({
  className = '',
  children,
  layout = 'full-width',
}) => {
  const breakpoints = getLayoutBreakpoints(layout)

  return (
    <Container className={className}>

<ContainerRow>

<ContainerScrollable>
          
          {<ApplicationNavbar />}

<MrbRow horizontal="center" className="p-5 mrb-fill-flex">
            <MrbCol {...breakpoints}>{children}</MrbCol>
          </MrbRow>
        </ContainerScrollable>
      </ContainerRow>
    </Container>
  )
}
