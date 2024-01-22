'use client'

import { ChangeEvent, ReactNode, useMemo } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbRadio
 * @description A radio button component
 * @prop {ReactNode} children - The input's label. @required
 * @prop {string} value - The input's value. @required
 * @prop {string} isChecked - Is the input checked.
 * @prop {string} name - The input's name. @required
 * @prop {({ value }) => void} onChange - The handler to execute on change.
 */

interface Props extends PropsHTML {
  name: string
  onChange: ({ value }) => void
  children: ReactNode
}

const { Wrapper, Label, Input } = Styled

export const MrbRadio: MrbComponent<Props, typeof Styled> = ({
  value,
  children,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ value })
  }

  const handleClick = () => {}

  const idUnique = useMemo(() => Utility.buildRandomAlphanumericString(4), [])

  return (
    <Wrapper onClick={handleClick}>
      <Input
        {...props}
        id={idUnique}
        type="radio"
        value={value}
        disabled={disabled}
        onChange={handleChange}
        checked={checked}
      />
      <Label htmlFor={idUnique} $disabled={disabled}>
        {children}
      </Label>
    </Wrapper>
  )
}

MrbRadio.Styled = Styled
