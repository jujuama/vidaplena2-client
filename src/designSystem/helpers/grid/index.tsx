import { Theme } from '../../theme'

export namespace HelperGrid {
  export function getGapSize(gap: number): string {
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

  export function buildMediaBreakpointsData(): {
    breakpoints: { name: string; width: number }[]
    sizeMax: number
  } {
    const SIZE_MAX = 12

    const breakpoints = [
      {
        name: 'xs',
        width: Theme.breakpoint_xs,
      },
      {
        name: 'sm',
        width: Theme.breakpoint_sm,
      },
      {
        name: 'md',
        width: Theme.breakpoint_md,
      },
      {
        name: 'lg',
        width: Theme.breakpoint_lg,
      },
      {
        name: 'xl',
        width: Theme.breakpoint_xl,
      },
      {
        name: 'xxl',
        width: Theme.breakpoint_xxl,
      },
    ]

    return {
      breakpoints,
      sizeMax: SIZE_MAX,
    }
  }

  export function buildMediaBreakpointForCol(gap: string = '0px') {
    const { breakpoints, sizeMax } = HelperGrid.buildMediaBreakpointsData()

    return breakpoints.map(({ name, width }) => {
      const medias = []
      for (let size = 0; size <= sizeMax; size++) {
        medias.push(`
          @media (min-width: ${width}px) {
            &.mrb-col__${name}--${size} {
              flex-basis: calc((100% / ${sizeMax} * ${size}) - ${gap});
              max-width: calc((100% / ${sizeMax} * ${size}) - ${gap});
            }
            &.mrb-col__${name}--fill {
              flex: 1;
            }
          }
        `)
      }

      return medias.join('\n')
    })
  }

  export function buildMediaBreakpointForGridItem() {
    const { breakpoints, sizeMax } = HelperGrid.buildMediaBreakpointsData()

    return breakpoints.map(({ name, width }) => {
      const medias = []
      for (let size = 0; size <= sizeMax; size++) {
        medias.push(`
          @media (min-width: ${width}px) {
            &.mrb-grid-item__${name}--${size} {
              grid-column: span ${size};
            }
          }
        `)
      }

      return medias.join('\n')
    })
  }
}
