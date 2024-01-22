'use client'

import { ReactNode } from 'react'
import { HelperClassname } from '../../../helpers/classname'
import { MrbComponent } from '../../../helpers/common'
import { HelperGrid } from '../../../helpers/grid'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbGridItem
 * @description A component used to create a column.
 * @prop {React.ReactNode} children - Children elements stacked vertically. @required
 * @prop {string | number} xs - Width breakpoint from 1 to 12 for XS screens.
 * @prop {'center' | 'left' | 'right'} horizontal - Align children horizontally.
 * @prop {'center' | 'top' | 'bottom'} vertical - Align children vertically.
 */

interface Props extends PropsHTML {
  children: ReactNode
  horizontal?: 'center' | 'left' | 'right'
  vertical?: 'center' | 'top' | 'bottom'
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
  xxl?: string | number
  gap?: 0 | 1 | 2 | 3 | 4 | 5
}

const { Wrapper } = Styled

export const MrbGridItem: MrbComponent<Props, typeof Styled> = ({
  children,
  horizontal,
  vertical,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className,
  gap = 0,
  ...props
}) => {
  const _className = HelperClassname.build({
    'mrb--grid-item': true,
    [`mrb-grid-item__horizontal--${horizontal}`]: Utility.isDefined(horizontal),
    [`mrb-grid-item__vertical--${vertical}`]: Utility.isDefined(vertical),
    [`mrb-grid-item__xs--${xs}`]: Utility.isDefined(xs),
    [`mrb-grid-item__sm--${sm}`]: Utility.isDefined(sm),
    [`mrb-grid-item__md--${md}`]: Utility.isDefined(md),
    [`mrb-grid-item__lg--${lg}`]: Utility.isDefined(lg),
    [`mrb-grid-item__xl--${xl}`]: Utility.isDefined(xl),
    [`mrb-grid-item__xxl--${xxl}`]: Utility.isDefined(xxl),
    [className]: Utility.isDefined(className),
  })

  return (
    <Wrapper
      {...props}
      className={_className}
      $gap={HelperGrid.getGapSize(gap)}
    >
      {children}
    </Wrapper>
  )
}

MrbGridItem.Styled = Styled
