import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { MrbCol, MrbRadio, MrbRow } from '../../atoms'

interface Props {
  value: any
  orientation: 'horizontal' | 'vertical'
  options: { label: ReactNode; value: any }[]
  onChange: ({ value }) => void
}

const Options = (props: {
  onChange: ({ value }) => void
  value: any
  option: { label: ReactNode; value: any }
}) => {
  const { option, value, onChange } = props

  return (
    <>
      <MrbRadio
        key={option.value}
        value={option.value}
        checked={option.value === value}
        name={option.value}
        onChange={onChange}
      >
        {option.label}
      </MrbRadio>
    </>
  )
}

export const MrbRadioList: MrbComponent<Props> = ({
  value,
  orientation = 'vertical',
  options,
  onChange,
}) => {
  return (
    <>
      {orientation === 'horizontal' && (
        <MrbRow className="mrb-fill-x" gap={2}>
          {options.map((option, index) => (
            <MrbCol key={index}>
              <Options option={option} value={value} onChange={onChange} />
            </MrbCol>
          ))}
        </MrbRow>
      )}

      {orientation === 'vertical' && (
        <MrbCol gap={2}>
          {options.map((option, index) => (
            <Options
              key={index}
              option={option}
              value={value}
              onChange={onChange}
            />
          ))}
        </MrbCol>
      )}
    </>
  )
}

MrbRadioList.Styled = {}
