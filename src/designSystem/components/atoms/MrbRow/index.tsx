'use client'

import { ReactNode } from 'react'
import { HelperClassname } from '../../../helpers/classname'
import { MrbComponent } from '../../../helpers/common'
import { Utility } from '../../../helpers/utility'
import { Theme } from '../../../theme'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbRow
 * @example example.txt
 * @description A component used to create a row.
 * @prop {ReactNode} children - Children elements stacked horizontally. @required
 * @prop {string} className - Additional CSS classes.
 * @prop {'center' | 'left' | 'right'} horizontal - Align children horizontally.
 * @prop {'center' | 'top' | 'bottom'} vertical - Align children vertically.
 * @prop {0 | 1 | 2 | 3 | 4 | 5} gap - Gap level between children.
 */

const getGapSize = (gap: number): string => {
  const mapping = {
    0: `${Theme.space_0}`,
    1: `${Theme.space_1}`,
    2: `${Theme.space_2}`,
    3: `${Theme.space_3}`,
    4: `${Theme.space_4}`,
    5: `${Theme.space_5}`,
  }

  return mapping[gap] ?? mapping[0]
}

interface Props extends PropsHTML {
  children: ReactNode
  horizontal?: 'center' | 'left' | 'right' | 'between' | 'around'
  vertical?: 'center' | 'top' | 'bottom' | 'between' | 'around'
  gap?: 0 | 1 | 2 | 3 | 4 | 5
}

const { Wrapper } = Styled

export const MrbRow: MrbComponent<Props, typeof Styled> = ({
  children,
  horizontal,
  vertical,
  className,
  gap = 0,
  ...props
}: Props) => {
  const _className = HelperClassname.build({
    'mrb--row': true,
    [`mrb-row__horizontal--${horizontal}`]: Utility.isDefined(horizontal),
    [`mrb-row__vertical--${vertical}`]: Utility.isDefined(vertical),
    [className]: Utility.isDefined(className),
  })

  const isClickable = !!props?.onClick

  return (
    <Wrapper
      {...props}
      className={_className}
      $gap={getGapSize(gap)}
      $isClickable={isClickable}
    >
      <>{children}</>
    </Wrapper>
  )
}

MrbRow.Styled = Styled
