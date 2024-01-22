'use client'

import { MouseEvent, ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbIcon } from '../MrbIcon'
import { PropsHTML, Size, Styled, Variant } from './styled'

/**
 * @component MrbButton
 * @example example.txt
 * @description Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
 * @prop {ReactNode} children - The content of the button @required
 * @prop {boolean} disabled - If true, the button will be disabled
 * @prop {boolean} isLoading - If true, the button will show a spinner.
 * @prop {'small' | 'medium' | 'large'} size - The size of the Button.
 * @prop {'button' | 'submit' } type - Whether the button is a form submit button or a normal button
 * @prop {'default' | 'primary' | 'success' | 'danger' | 'warning'} variant - The variant of the Button
 * @prop {boolean} fullWidth - Full width buttons extend the full available width of their container. This is useful for creating buttons that span the full width of a card or dialog.
 * @prop {() => void} onClick - The function to execute when the button is clicked. If the button is type="submit" you can't set a onClick function.
 */

interface Props extends PropsHTML {
  children: ReactNode
  type?: 'submit' | 'button'
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  disabled?: boolean
  isLoading?: boolean
  noPadding?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

const { Button, Content, Loader, Children } = Styled

export const MrbButton: MrbComponent<Props, typeof Styled> = ({
  children,
  variant = 'default',
  type = 'button',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  noPadding = false,
  onClick,
  ...props
}) => {
  return (
    <Button
      {...props}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      $size={size}
      $fullWidth={fullWidth}
      $variant={variant}
      $isLoading={isLoading}
      $noPadding={noPadding}
    >
      <Content>
        {isLoading && (
          <Loader>
            <MrbIcon name="loading" isRotating />
          </Loader>
        )}
        <Children>{children}</Children>
      </Content>
    </Button>
  )
}

MrbButton.Styled = Styled
