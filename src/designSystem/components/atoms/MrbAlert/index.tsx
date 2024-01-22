'use client'

import { ReactNode } from 'react'
import { HelperCommon, MrbComponent } from '../../../helpers/common'
import { Styled, Variant } from './styled'

/**
 * @component MrbAlert
 * @description An alert component for displaying text alerts
 * @prop {React.ReactNode} children - The content of the alert
 */

interface Props extends HelperCommon.BaseProps {
  children: ReactNode
  variant?: Variant
}

const { Wrapper } = Styled

export const MrbAlert: MrbComponent<Props, typeof Styled> = ({
  children,
  variant = 'default',
  ...props
}) => {
  return (
    <Wrapper $variant={variant} {...props}>
      {children}
    </Wrapper>
  )
}

MrbAlert.Styled = Styled
