'use client'

import { ChangeEvent } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { StringLibrary } from '../../../helpers/string'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbSelect
 * @description A component used to pick a value from a list of options.
 * @prop {string[]} options - The list of options for the select component.
 * @prop {string} value - The currently selected option.
 * @prop {(value: string) => void} evChange - The function to call when the selected option changes.
 * @prop {string} className - Additional CSS classes to apply to the select component.
 */

interface Props extends PropsHTML {
  options: { label: string; value: any }[]
  onChange: ({ value }) => void
}

const { Wrapper, Option, Select } = Styled

export const MrbSelect: MrbComponent<Props, typeof Styled> = ({
  options,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const valueString = event.target.value
    const option = options.find(option => `${option.value}` === valueString)
    const value = option?.value ?? valueString

    onChange({ value })
  }

  const isEmpty =
    !Utility.isDefined(value) ||
    (typeof value === 'string' && !StringLibrary.isDefined(value))

  return (
    <Wrapper $isEmpty={isEmpty}>
      <Select {...props} value={value} onChange={handleChange}>
        <Option value={''} disabled>
          {placeholder ?? 'Choose an option'}
        </Option>

        {options.map((option, index) => (
          <Option key={option.value + index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Wrapper>
  )
}

MrbSelect.Styled = Styled
