import { HelperGrid } from '@/designSystem/helpers/grid'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div<{ $gap: string; $isClickable: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => `${$gap}`};
  cursor: ${({ $isClickable }) => `${$isClickable ? 'pointer' : 'inherit'}`};

  /* ------------------------------- HORIZONTAL ------------------------------- */
  &.mrb-row__horizontal--center {
    justify-content: center;
  }
  &.mrb-row__horizontal--left {
    justify-content: start;
  }
  &.mrb-row__horizontal--right {
    justify-content: end;
  }
  &.mrb-row__horizontal--between {
    justify-content: space-between;
  }
  &.mrb-row__horizontal--around {
    justify-content: space-around;
  }
  /* -------------------------------- VERTICAL -------------------------------- */
  &.mrb-row__vertical--center {
    align-items: center;
  }
  &.mrb-row__vertical--top {
    align-items: start;
  }
  &.mrb-row__vertical--bottom {
    align-items: end;
  }
  &.mrb-row__vertical--between {
    align-items: space-between;
  }
  &.mrb-row__vertical--around {
    align-items: space-around;
  }

  & > * {
    ${({ $gap }) => HelperGrid.buildMediaBreakpointForCol($gap)}
  }
`

export const Styled = {
  Wrapper,
}
