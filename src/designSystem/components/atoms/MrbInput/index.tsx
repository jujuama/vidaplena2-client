'use client'

import { ChangeEvent } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { StringLibrary } from '../../../helpers/string'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbInput
 * @description An input component.
 * @prop {string} value - The input's value.
 * @prop {string} type - The input's type.
 * @prop {(event: { value: string }) => void} onChange - The function to execute on change.
 */

interface Props extends PropsHTML {
  onChange?: ({ value }) => void
  onBlur?: ({ value }) => void
}

const { Wrapper } = Styled

export const MrbInput: MrbComponent<Props, typeof Styled> = ({
  type = 'text',
  onChange,
  onBlur,
  ...props
}) => {
  const fromEventToValue = (
    event: ChangeEvent<HTMLInputElement>,
  ): string | number => {
    const valueRaw: string = event.target.value

    let value: string | number = null

    const isDefined = StringLibrary.isDefined(valueRaw)

    if (isDefined) {
      const isNumber = type === 'number'

      if (isNumber) {
        value = Number(valueRaw)
      } else {
        const isEmail = type === 'email'

        if (isEmail) {
          value = valueRaw.trim()
        } else {
          value = valueRaw
        }
      }
    }

    return value
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = fromEventToValue(event)

    onChange?.({ value })
  }

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    const value = fromEventToValue(event)

    onBlur?.({ value })
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleChange(event)
      handleBlur(event)
    }
  }

  return (
    <Wrapper
      {...props}
      type={type}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
}

MrbInput.Styled = Styled
