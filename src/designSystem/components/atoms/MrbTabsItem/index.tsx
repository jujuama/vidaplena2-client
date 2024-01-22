'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { LinkHelper } from '../../../helpers/link'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbTabs.Item
 * @description A list item component for an MrbTabs component
 * @prop {ReactNode} children - The content of the list item
 * @prop {() => void} onClick - The function to execute when the list item is clicked
 */

interface Props extends PropsHTML {
  children: ReactNode
  onClick?: () => void
  to?: string
  isActive?: boolean
}

const { Wrapper, WrapperLink } = Styled

export const MrbTabsItem: MrbComponent<Props, typeof Styled> = ({
  children,
  onClick,
  to,
  isActive = false,
  ...props
}) => {
  const { isActive: pathActive } = LinkHelper.usePathActive(to)
  return (
    <>
      {!to && (
        <Wrapper
          {...props}
          onClick={onClick}
          $isActive={isActive}
          className={isActive ? 'tab-active' : ''}
        >
          {children}
        </Wrapper>
      )}
      {to && (
        <WrapperLink
          href={to}
          $isActive={pathActive}
          className={pathActive ? 'tab-active' : ''}
        >
          {children}
        </WrapperLink>
      )}
    </>
  )
}

MrbTabsItem.Styled = Styled
