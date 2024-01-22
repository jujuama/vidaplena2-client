'use client'

import { ComponentProps } from 'react'
import { MrbInput } from '..'
import { MrbComponent } from '../../../helpers/common'
import { DateLibrary } from '../../../helpers/date'

/**
 * @component MrbDate
 * @description A Date component.
 * @prop {string} value - The date input's timestamp value
 * @prop {(event: { value: string }) => void} onChange - The function to execute on change.
 */

interface Props extends ComponentProps<typeof MrbInput> {
  onChange?: ({ value }) => void
}

export const MrbDate: MrbComponent<Props> = ({
  onChange,
  defaultValue,
  ...props
}) => {
  const handleChange = ({ value }) => {
    onChange({ value })
  }

  const defaultValueEnsured = DateLibrary.toInputDate(defaultValue as string)

  return (
    <MrbInput
      {...props}
      defaultValue={defaultValueEnsured}
      type="date"
      onChange={handleChange}
    />
  )
}

MrbDate.Styled = {}
