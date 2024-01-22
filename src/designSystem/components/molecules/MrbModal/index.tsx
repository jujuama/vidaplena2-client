'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbCol, MrbRow } from '../../atoms'
import { FooterDefault } from './components/FooterDefault'
import { PropsHTML, Styled, Width } from './styled'

/**
 * @component MrbModal
 * @example example.txt
 * @description A reusable modal component
 * @prop {ReactNode} children - The content of the modal @required
 * @prop {boolean} isOpen - Whether the modal is open or not @required
 * @prop {() => void} onClose - Function to close the modal @required
 * @prop {ReactNode} header - The header of the modal such as the title
 * @prop {ReactNode} footer - The footer of the modal
 * @prop {'small' | 'medium' | 'large'} width - The size of the modal
 */

interface Props extends PropsHTML {
  children: ReactNode
  isOpen: boolean
  header?: ReactNode
  footer?: ReactNode
  width?: Width
  isExpanded?: boolean
  onClose?: () => void
}

const { Wrapper, Background, ModalWrapper, Header, Content, Footer } = Styled

export const MrbModal: MrbComponent<Props> = ({
  children,
  isOpen,
  onClose,
  header,
  footer,
  isExpanded = false,
  width = 'medium',
  ...props
}) => {
  if (!isOpen) {
    return null
  }

  const breakpointsBySize: Record<Width, Record<string, number>> = {
    ['small']: {
      xs: 11,
      sm: 11,
      md: 9,
      lg: 5,
      xl: 4,
      xxl: 3,
    },
    ['medium']: {
      xs: 11,
      sm: 11,
      md: 8,
      lg: 6,
      xl: 5,
      xxl: 4,
    },
    ['large']: {
      xs: 11,
      sm: 11,
      md: 10,
      lg: 7,
      xl: 6,
      xxl: 5,
    },
  }

  let breakpoints = breakpointsBySize[width]

  if (isExpanded) {
    breakpoints = { xs: 12 }
  }

  return (
    <Wrapper {...props} $isExpanded={isExpanded}>
      <Background />

      <MrbRow horizontal="center" className="mrb-fill-x">
        <MrbCol {...breakpoints}>
          <ModalWrapper>
            {header && <Header className="p-3">{header}</Header>}

            <Content className="p-3">{children}</Content>

            <Footer className="p-2">
              {footer ?? <FooterDefault onClose={onClose} />}
            </Footer>
          </ModalWrapper>
        </MrbCol>
      </MrbRow>
    </Wrapper>
  )
}

MrbModal.Styled = Styled
