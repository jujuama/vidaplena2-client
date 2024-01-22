'use client'

import { MrbComponent } from '../../../helpers/common'
import { IconMapping } from './mapping'
import { PropsHTML, RemixName, Styled } from './styled'

/**
 * @component MrbIcon
 * @description An icon component to display icons.
 * @prop {string} name - The icon name.
 */
interface Props extends PropsHTML {
  name: RemixName | keyof typeof IconMapping | string
  isRotating?: boolean
}

const { Wrapper } = Styled

export const MrbIcon: MrbComponent<Props, typeof Styled> = ({
  name,
  isRotating = false,
  ...props
}) => {
  const getRemixName = () => {
    if (name.includes('ri-')) {
      return name
    }

    if (name.endsWith('-line') || name.endsWith('-fill')) {
      return `ri-${name}`
    }

    return `ri-${name}-fill`
  }

  const isCustom = (name: string) => {
    return !!IconMapping[name]
  }

  const nameRemix = getRemixName()

  return (
    <Wrapper {...props} $isRotating={isRotating}>
      {isCustom(name) && IconMapping[name]}
      {!isCustom(name) && <i className={nameRemix}></i>}
    </Wrapper>
  )
}

MrbIcon.Styled = Styled
