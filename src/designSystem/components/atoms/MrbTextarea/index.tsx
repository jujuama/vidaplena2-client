'use client'

import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbTextara
 * @description A textarea component.
 * @prop {string} value - The input's value.
 * @prop {string} type - The input's type.
 * @prop {(event: { value: string }) => void} onChange - The function to execute on change.
 */

interface Props extends PropsHTML {
  name?: string
  value?: string
  onChange?: ({ value }) => void
  onBlur?: ({ value }) => void
}

const { Wrapper } = Styled

export const MrbTextarea: MrbComponent<Props, typeof Styled> = ({
  name,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  const handleChange = event => {
    const value = event.target.value
    onChange?.({ value })
  }

  const handleBlur = event => {
    const value = event.target.value
    onBlur?.({ value })
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleChange(event)
      handleBlur(event)
    }
  }

  return (
    <Wrapper>
      <textarea
        rows={4}
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      ></textarea>
    </Wrapper>
  )
}

MrbTextarea.Styled = Styled
