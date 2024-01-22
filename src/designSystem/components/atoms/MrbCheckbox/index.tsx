'use client'

import { ChangeEvent } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbCheckbox
 * @description An input checkbox component.
 * @prop {boolean} value - The input's value.
 * @prop {ReactNode} children - The label for the checkbox
 * @prop {(event: { value: boolean }) => void} onChange - The function to execute on change.
 */

interface Props extends PropsHTML {
  onChange: ({ value }) => void
  value?: boolean
}

const { Wrapper, Input, Label } = Styled

export const MrbCheckbox: MrbComponent<Props, typeof Styled> = ({
  value,
  children,
  disabled,
  onChange,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    onChange({ value: isChecked })
  }

  const handleClick = () => {}

  const idUnique = Utility.buildRandomAlphanumericString(4)

  return (
    <Wrapper onClick={handleClick}>
      <Input
        {...props}
        id={idUnique}
        type="checkbox"
        disabled={disabled}
        onChange={handleChange}
        checked={value}
      />
      <Label htmlFor={idUnique} $disabled={disabled}>
        {children}
      </Label>
    </Wrapper>
  )
}

MrbCheckbox.Styled = Styled
