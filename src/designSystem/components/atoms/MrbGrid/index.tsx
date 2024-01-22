'use client'

import { ReactNode } from 'react'
import { HelperClassname } from '../../../helpers/classname'
import { MrbComponent } from '../../../helpers/common'
import { HelperGrid } from '../../../helpers/grid'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbGrid
 * @example example.txt
 * @description A component used to create a row.
 * @prop {React.ReactNode} children - Children elements stacked horizontally. @required
 * @prop {string} className - Additional CSS classes.
 * @prop {'center' | 'left' | 'right'} horizontal - Align children horizontally.
 * @prop {'center' | 'top' | 'bottom'} vertical - Align children vertically.
 * @prop {0 | 1 | 2 | 3 | 4 | 5} gap - Gap level between children.
 */

interface Props extends PropsHTML {
  children: ReactNode
  horizontal?: 'center' | 'left' | 'right'
  vertical?: 'center' | 'top' | 'bottom'
  gap?: 0 | 1 | 2 | 3 | 4 | 5
}

const { Wrapper } = Styled

export const MrbGrid: MrbComponent<Props, typeof Styled> = ({
  children,
  horizontal,
  vertical,
  className,
  gap = 0,
  ...props
}) => {
  const _className = HelperClassname.build({
    'mrb--grid': true,
    [`mrb-grid__horizontal--${horizontal}`]: Utility.isDefined(horizontal),
    [`mrb-grid__vertical--${vertical}`]: Utility.isDefined(vertical),
    [className]: Utility.isDefined(className),
  })

  return (
    <Wrapper
      {...props}
      className={_className}
      $gap={HelperGrid.getGapSize(gap)}
    >
      <>{children}</>
    </Wrapper>
  )
}

MrbGrid.Styled = Styled
