import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export interface PropsHTML extends HTMLAttributes<HTMLDivElement> {}

const Wrapper = styled.div<{ $gap: string }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: row;
  grid-gap: ${({ $gap }) => `${$gap}`};
  width: 100%;

  /* ------------------------------- HORIZONTAL ------------------------------- */
  &.mrb-grid__horizontal--center {
    justify-content: center;
  }
  &.mrb-grid__horizontal--left {
    justify-content: start;
  }
  &.mrb-grid__horizontal--right {
    justify-content: end;
  }
  /* -------------------------------- VERTICAL -------------------------------- */
  &.mrb-grid__vertical--center {
    align-items: center;
  }
  &.mrb-grid__vertical--top {
    align-items: start;
  }
  &.mrb-grid__vertical--bottom {
    align-items: end;
  }
`

export const Styled = { Wrapper }
