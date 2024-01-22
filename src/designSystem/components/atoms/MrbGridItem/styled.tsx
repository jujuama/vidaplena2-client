import { HelperGrid } from '@/designSystem/helpers/grid'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { MrbCard } from '../MrbCard'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div<{ $gap: string }>`
  & > ${MrbCard.Styled.Wrapper} {
    height: 100%;
  }

  ${HelperGrid.buildMediaBreakpointForGridItem()}

  /* ------------------------------- HORIZONTAL ------------------------------- */
  &.mrb-grid-item__horizontal--center {
    justify-content: center;
  }
  &.mrb-grid-item__horizontal--left {
    justify-content: start;
  }
  &.mrb-grid-item__horizontal--right {
    justify-content: end;
  }
  /* -------------------------------- VERTICAL -------------------------------- */
  &.mrb-grid-item__vertical--center {
    align-items: center;
  }
  &.mrb-grid-item__vertical--top {
    align-items: start;
  }
  &.mrb-grid-item__vertical--bottom {
    align-items: end;
  }
`

export const Styled = {
  Wrapper,
}
