import { MrbIcon, MrbTypography } from '@/designSystem'
import { MrbComponent } from '../../../helpers/common'
import { PasswordLibrary } from '../../../helpers/password'
import { PropsHTML, Styled } from './styled'

interface Props extends PropsHTML {
  value: string
}

const { Wrapper } = Styled

export const MrbPasswordStrength: MrbComponent<Props> = ({
  value,
  ...props
}) => {
  const getIconName = (isOk: boolean): string => {
    if (isOk) {
      return 'check-fill'
    } else {
      return 'circle-line'
    }
  }

  const { hasNumber, hasSpecialCharacter, hasUppercaseLetter, isLengthOk } =
    PasswordLibrary.analyse(value)

  return (
    <>
      <Wrapper {...props}>
        <MrbTypography variant="caption">
          <MrbIcon name={getIconName(isLengthOk)} /> minimum 8 characters
        </MrbTypography>
        <MrbTypography variant="caption">
          <MrbIcon name={getIconName(hasNumber)} /> contains a number
        </MrbTypography>
        <MrbTypography variant="caption">
          <MrbIcon name={getIconName(hasUppercaseLetter)} /> contains uppercase
          letter
        </MrbTypography>
        <MrbTypography variant="caption">
          <MrbIcon name={getIconName(hasSpecialCharacter)} /> contains special
          character
        </MrbTypography>
      </Wrapper>
    </>
  )
}

MrbPasswordStrength.Styled = Styled
