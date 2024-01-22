import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { HelperGrid } from '../../../helpers/grid'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div<{ $gap: string }>`
  display: flex;
  flex-direction: column;
  align-items: auto;
  grid-gap: ${({ $gap }) => `${$gap}`};

  /* ------------------------------- HORIZONTAL ------------------------------- */
  &.mrb-col__horizontal--center {
    align-items: center;
  }
  &.mrb-col__horizontal--left {
    align-items: start;
  }
  &.mrb-col__horizontal--right {
    align-items: end;
  }
  &.mrb-col_horizontal--between {
    align-items: space-between;
  }
  &.mrb-col_horizontal--around {
    align-items: space-around;
  }
  /* -------------------------------- VERTICAL -------------------------------- */
  &.mrb-col__vertical--center {
    justify-content: center;
  }
  &.mrb-col__vertical--top {
    justify-content: start;
  }
  &.mrb-col__vertical--bottom {
    justify-content: end;
  }
  &.mrb-col_vertical--between {
    justify-content: space-between;
  }
  &.mrb-col_vertical--around {
    justify-content: space-around;
  }

  ${HelperGrid.buildMediaBreakpointForCol()}
`

export const Styled = {
  Wrapper,
}
