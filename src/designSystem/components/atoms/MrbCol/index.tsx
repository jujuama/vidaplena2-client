'use client'

import { ReactNode } from 'react'
import { HelperClassname } from '../../../helpers/classname'
import { MrbComponent } from '../../../helpers/common'
import { HelperGrid } from '../../../helpers/grid'
import { Utility } from '../../../helpers/utility'
import { PropsHTML, Styled } from './styled'

/**
 * @component MrbCol
 * @description A component used to create a column.
 * @example example.txt
 * @prop {ReactNode} children - Children elements stacked vertically. @required
 * @prop {'center' | 'left' | 'right'} horizontal - Align children horizontally.
 * @prop {'center' | 'top' | 'bottom'} vertical - Align children vertically.
 * @prop {string | number} xs - Width breakpoint from 1 to 12 for XS screens.
 * @prop {string | number} sm - Width breakpoint from 1 to 12 for sm screens.
 * @prop {string | number} md - Width breakpoint from 1 to 12 for md screens.
 * @prop {string | number} lg - Width breakpoint from 1 to 12 for lg screens.
 * @prop {string | number} xl - Width breakpoint from 1 to 12 for xl screens.
 * @prop {string | number} xxl - Width breakpoint from 1 to 12 for xxl screens.
 */

interface Props extends PropsHTML {
  children: ReactNode
  horizontal?: 'center' | 'left' | 'right' | 'around' | 'between'
  vertical?: 'center' | 'top' | 'bottom' | 'around' | 'between'
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
  xxl?: string | number
  gap?: 0 | 1 | 2 | 3 | 4 | 5
}

const { Wrapper } = Styled

export const MrbCol: MrbComponent<Props, typeof Styled> = ({
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
    'mrb--col': true,
    [`mrb-col__horizontal--${horizontal}`]: Utility.isDefined(horizontal),
    [`mrb-col__vertical--${vertical}`]: Utility.isDefined(vertical),
    [`mrb-col__xs--${xs}`]: Utility.isDefined(xs),
    [`mrb-col__sm--${sm}`]: Utility.isDefined(sm),
    [`mrb-col__md--${md}`]: Utility.isDefined(md),
    [`mrb-col__lg--${lg}`]: Utility.isDefined(lg),
    [`mrb-col__xl--${xl}`]: Utility.isDefined(xl),
    [`mrb-col__xxl--${xxl}`]: Utility.isDefined(xxl),
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

MrbCol.Styled = Styled
