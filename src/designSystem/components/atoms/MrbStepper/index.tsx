'use client'

import { MrbComponent } from '../../../helpers/common'
import { PropsHTML, Status, StatusDivider, Styled } from './styled'

/**
 * @component MrbStepper
 * @description A Stepper component
 * @prop {string[]} steps - The array of labels of the steps
 * @prop {number} index - The index number of the activestep
 */
interface Props extends PropsHTML {
  steps: string[]
  index: number
  onClickStep?: (index: number) => void
}

const { Wrapper, Step, Label, CircleContainer, Divider, Circle } = Styled

export const MrbStepper: MrbComponent<Props, typeof Styled> = ({
  steps,
  index = 0,
  onClickStep,
  ...props
}: Props) => {
  const handleClick = (indexClicked: number): void => {
    onClickStep?.(indexClicked)
  }

  const getStatus = (indexToCheck: number): Status => {
    const isDone = indexToCheck < index
    const isPending = indexToCheck > index

    if (isDone) {
      return 'done'
    }

    if (isPending) {
      return 'pending'
    }

    return 'active'
  }

  const getStatusDivider = (indexToCheck: number): StatusDivider => {
    const isActive = indexToCheck <= index * 2
    const isFirst = indexToCheck === 0
    const isLast = indexToCheck === (steps.length - 1) * 2 + 1

    if (isFirst || isLast) {
      return 'hidden'
    }

    if (isActive) {
      return 'active'
    }

    return 'pending'
  }

  return (
    <Wrapper {...props}>
      {steps.map((label, index) => (
        <Step
          key={index}
          $status={getStatus(index)}
          $isClickable={!!onClickStep}
          onClick={() => handleClick(index)}
        >
          <Label>{label}</Label>
          <CircleContainer>
            <Divider $status={getStatusDivider(index * 2)} />
            <Circle />
            <Divider $status={getStatusDivider(index * 2 + 1)} />
          </CircleContainer>
        </Step>
      ))}
    </Wrapper>
  )
}

MrbStepper.Styled = Styled
