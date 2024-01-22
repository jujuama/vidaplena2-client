'use client'

import { ReactElement, ReactNode, cloneElement } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbIcon } from '../MrbIcon'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbNavbar.Dropdown
 * @description A navigation bar dropdown component to display a link with sub-links.
 * @prop {ReactNode} content - The link which displays the sub-links on hover.
 * @prop {ReactNode} children - The sub-links.
 */
interface Props extends PropsHTML {
  content: ReactElement
  children: ReactNode
}

const { Wrapper, Content } = Styled

export const MrbNavbarDropdown: MrbComponent<Props, typeof Styled> = ({
  children,
  content,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {cloneElement(content, {
        children: (
          <>
            {content.props.children}
            <MrbIcon name="expand" />
          </>
        ),
      })}
      <Content>{children}</Content>
    </Wrapper>
  )
}

MrbNavbarDropdown.Styled = Styled
