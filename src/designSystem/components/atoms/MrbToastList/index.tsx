import { MrbComponent } from '@/designSystem/helpers/common'
import { styled } from 'styled-components'
import { Theme } from '../../../theme'
import { MrbToast, MrbToastAction } from '../MrbToast'

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: ${Theme.space_2};
  display: flex;
  flex-direction: column;
  gap: ${Theme.space_1};
`

/**
 * @component MrbToastList
 * @description A toast list component.
 * @prop {{ id: string; message: string }[]} toasts - The list of toasts.
 */

interface Props {
  toasts: MrbToastAction[]
}

const Styled = { Wrapper }

export const MrbToastList: MrbComponent<Props, typeof Styled> = ({
  toasts,
}) => {
  return (
    <Wrapper>
      {toasts.map(toast => (
        <MrbToast key={toast.id} type={toast.toast.type}>
          {toast.toast.children}
        </MrbToast>
      ))}
    </Wrapper>
  )
}

MrbToastList.Styled = Styled
