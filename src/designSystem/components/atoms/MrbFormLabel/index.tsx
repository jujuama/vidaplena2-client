import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Styled } from './styled'

interface Props extends PropsHTML {
  label?: string
  indication?: ReactNode
  isOptional?: boolean
  hasError?: boolean
  children: ReactNode
}

const {
  Wrapper,
  Label,
  LabelContent,
  LabelOptional,
  LabelIndication,
  Content,
} = Styled

export const MrbFormLabel: MrbComponent<Props, typeof Styled> = ({
  children,
  label,
  indication,
  isOptional = true,
  hasError = false,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      {(label || isOptional) && (
        <>
          <Label>
            {label && <LabelContent $hasError={hasError}>{label}</LabelContent>}
            {isOptional && <LabelOptional>Optional</LabelOptional>}
          </Label>
        </>
      )}
      <Content>{children}</Content>
      {indication && <LabelIndication>{indication}</LabelIndication>}
    </Wrapper>
  )
}

MrbFormLabel.Styled = Styled
