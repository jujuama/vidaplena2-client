import { MrbCheckboxTheme } from '../components/atoms/MrbCheckbox/theme'
import { Palette } from './palette'
import { ThemeType } from './type'

const textBlack = '#09090b'
const textGrey = '#71717a'
const borderColor = '#e4e4e7'
const borderColorDanger = '#f9a4a3'
const colorDanger = '#ef4444'
const colorBlack = '#18181b'
const colorHoverGrey = '#f4f4f5'
const boxShadow = '0 1px 2px 0 rgba(0,0,0,.05)'
/* ----------------------------------- OLD ---------------------------------- */
const colorPrimary = textBlack
const colorPrimaryLighter = Palette.grey_dark_6()

const colorWarning = '#FCC174'
const colorSuccess = '#86E2CF'

const textPrimary = '#051D2C'
const textSecondary = '#737373'

const textSize_sm = '12px'
const textSize_md = '14px'

const grey = '#E4E4E7'
const greyLighter = '#F4F4F5'
const greyDarker = '#cfcfd1'

const colorSecondary = greyLighter

const checkbox: MrbCheckboxTheme = {
  width: '16px',
  background: Palette.white(),
  border: `1px solid ${colorBlack}`,
  checked: {
    background: colorBlack,
    color: Palette.white(),
    border: `1px solid ${colorBlack}`,
  },
  hover: {
    border: `1px solid ${colorBlack}`,
  },
}

export const ThemeUltimate: ThemeType = {
  space_0: '0rem',
  space_1: '0.5rem',
  space_2: '1rem',
  space_3: '1.5rem',
  space_4: '2rem',
  space_5: '2.5rem',

  breakpoint_xs: 0,
  breakpoint_sm: 576,
  breakpoint_md: 768,
  breakpoint_lg: 992,
  breakpoint_xl: 1200,
  breakpoint_xxl: 1600,

  borderRadius: '0.5rem',

  ui_1: '#FFFFFF',
  ui_2: '#FFFFFF',
  ui_3: '#FFFFFF',

  colorPrimary,
  colorSecondary,
  colorDanger,
  colorWarning,
  colorSuccess,
  colorDisabled: '#FCFCFD',

  textPrimary,
  textSecondary,

  textSize_xs: '11px',
  textSize_sm,
  textSize_md,
  textSize_lg: '20px',
  textSize_xl: '24px',
  textSize_xxl: '35px',

  boxShadow,

  components: {
    alert: {
      default: {
        color: textBlack,
        border: `1px solid ${borderColor}`,
        background: Palette.white(),
      },
      primary: {
        color: Palette.blue(),
        border: `1px solid ${Palette.blue()}`,
        background: Palette.white(),
      },
      danger: {
        color: colorDanger,
        border: `1px solid ${borderColorDanger}`,
        background: Palette.white(),
      },
      success: {
        color: Palette.green(),
        border: `1px solid ${Palette.green()}`,
        background: Palette.white(),
      },
      warning: {
        color: Palette.orange(),
        border: `1px solid ${Palette.orange()}`,
        background: Palette.white(),
      },
    },
    kanban: {
      background: Palette.white(),
      column: {
        background: Palette.grey_1(5),
      },
    },
    badge: {
      variantDefault: {
        color: Palette.white(),
        background: colorBlack,
        border: `none`,
      },
      variantPrimary: {
        color: Palette.black(),
        background: '#f4f4f5',
        border: `none`,
      },
      variantSecondary: {
        color: Palette.white(),
        background: Palette.grey_1(),
        border: `none`,
      },
      variantSuccess: {
        color: Palette.white(),
        background: Palette.green(),
        border: `none`,
      },
      variantWarning: {
        color: Palette.white(),
        background: Palette.orange(),
        border: `none`,
      },
      variantDanger: {
        color: Palette.white(),
        background: Palette.red(),
        border: `none`,
      },
    },
    button: {
      variantDefault: {
        background: Palette.white(),
        boxShadow: `0 1px 2px 0 rgba(0,0,0,.05)`,
        color: Palette.black(),
        border: `1px solid ${borderColor}`,
        hover: {
          background: colorHoverGrey,
        },
      },
      variantPrimary: {
        background: colorPrimary,
        color: Palette.white(),
        boxShadow: `0 1px 2px 0 rgba(0,0,0,.1)`,
        border: `1px solid ${colorPrimary}`,
        hover: {
          background: colorPrimaryLighter,
        },
      },
      variantSecondary: {
        background: 'transparent',
        color: colorPrimary,
        border: `1px solid transparent`,
        hover: {
          color: colorPrimaryLighter,
        },
      },
      variantPlain: {
        background: 'transparent',
        color: textPrimary,

        border: `0px`,
        hover: {
          color: colorPrimary,
        },
      },
      variantDanger: {
        background: colorDanger,
        color: Palette.white(),
        boxShadow: boxShadow,
        border: `1px solid ${colorDanger}`,
        hover: {
          background: `#ff6f66`,
          border: `1px solid #ff6f66`,
        },
      },
      variantWarning: {
        background: Palette.orange(),
        color: Palette.white(),
        boxShadow: boxShadow,
        border: `1px solid ${Palette.orange()}`,
        hover: {
          background: `#feae59`,
          border: `1px solid #feae59`,
        },
      },
      variantSuccess: {
        background: Palette.green(),
        color: Palette.white(),
        boxShadow: boxShadow,
        border: `1px solid ${Palette.green()}`,
        hover: {
          background: `#72d382`,
          border: `1px solid #72d382`,
        },
      },
      variantDisabled: {
        background: grey,
        boxShadow: boxShadow,
        color: Palette.grey_dark_3(),
        border: `1px solid ${grey}`,
      },
    },
    card: {
      border: `1px solid ${borderColor}`,
      background: Palette.white(),
      boxShadow: boxShadow,
      hover: {
        background: colorHoverGrey,
      },
    },
    checkbox,
    description: {
      label: {
        color: textGrey,
        fontWeight: '400',
      },
      value: {
        color: colorBlack,
      },
    },
    divider: {
      color: borderColor,
    },
    html: {
      color: textPrimary,
      background: Palette.white(),
    },
    formLabel: {
      textSize: textSize_md,
      color: textPrimary,
      variantDanger: {
        color: colorDanger,
      },
      indication: {
        textSize: '13px',
        color: Palette.grey_1(),
      },
      optional: {
        textSize: textSize_sm,
        color: textSecondary,
      },
    },
    input: {
      fontSize: '13px',
      lineHeight: '26px',
      padding: '4px 12px 4px 12px',
      variantDefault: {
        background: Palette.white(),
        color: textPrimary,
        border: `1px solid ${grey}`,
        hover: {
          border: `1px solid ${grey}`,
        },
        focus: {
          outline: `1px solid ${greyDarker}`,
          border: `1px solid ${grey}`,
        },
      },
    },
    leftNavbar: {
      background: Palette.white(),
      width: `250px`,
      borderRight: `1px solid ${borderColor}`,
    },
    link: {
      variantDefault: {
        color: textBlack,
        borderColor: textBlack,
        hover: {
          color: textBlack,
        },
      },
      variantPrimary: {
        color: textBlack,
        borderColor: 'transparent',
        hover: {
          color: textBlack,
          borderColor: textBlack,
        },
      },
    },
    list: {
      divider: { border: `1px solid ${borderColor}` },
      item: {
        hover: {
          background: colorHoverGrey,
        },
      },
    },
    modal: {
      border: `1px solid ${borderColor}`,
    },
    navbar: {
      background: Palette.white(),
      borderBottom: `1px solid ${borderColor}`,
    },
    navbarDropdown: {
      background: Palette.white(),
      border: `1px solid ${borderColor}`,
    },
    dropdown: {
      background: Palette.white(),
      border: `1px solid ${borderColor}`,
    },
    navbarLink: {
      color: textGrey,
      background: Palette.white(),
      border: '1px solid transparent',
      fontSize: textSize_md,
      hover: {
        color: colorPrimary,
      },

      active: {
        color: colorPrimary,
      },
    },
    navbarLogo: {
      background: colorPrimary,
      color: Palette.white(),
      border: `none`,
      shadowColor: Palette.black(50),
    },
    notification: {
      background: '0 4px 30px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${borderColor}`,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      blur: {
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
    radio: checkbox,
    stepper: {
      active: {
        color: colorPrimary,
        borderColor: colorPrimary,
      },
      disabled: {
        color: textGrey,
        borderColor: textGrey,
      },
    },
    table: {
      borderSpacing: `0`,
      boxShadow: ``,
      background: Palette.white(),
      head: {
        color: textGrey,
        fontWeight: `normal`,
        borderBottom: `1px solid ${borderColor}`,
      },
      body: {
        color: textPrimary,
        border: `0px`,
      },
      hover: {
        background: colorHoverGrey,
        color: textPrimary,
        border: `0px`,
      },
    },
    tabs: {
      item: {
        color: textSecondary,
        padding: '10px',
        hover: {
          color: colorPrimary,
        },
        active: {
          color: colorPrimary,
          fontWeight: '500',
        },
      },
    },
    tag: {
      padding: '0.125rem 0.625rem 0.125rem 0.625rem',
      textSize: '12px',
      variantDefault: {
        color: Palette.black(),
        background: `#F4F4F5`,
        border: `none`,
      },
      variantPrimary: {
        color: Palette.white(),
        background: Palette.black(),
        border: `none`,
      },
      variantSecondary: {
        color: Palette.black(),
        background: `transparent`,
        border: `1px solid #F4F4F5`,
      },
      variantSuccess: {
        color: Palette.green(),
        background: Palette.green(10),
        border: `none`,
      },
      variantWarning: {
        color: Palette.orange(),
        background: Palette.orange(10),
        border: `none`,
      },
      variantDanger: {
        color: Palette.red(),
        background: Palette.red(10),
        border: `none`,
      },
    },
    toast: {
      boxShadow: boxShadow,
      variantInfo: {
        border: `1px solid ${borderColor}`,
        background: Palette.white(),
        color: textBlack,
      },
      variantDanger: {
        border: `1px solid ${grey}`,
        background: Palette.white(),
        color: Palette.red(),
      },
      variantSuccess: {
        border: `1px solid ${grey}`,
        background: Palette.white(),
        color: Palette.green(),
      },
      variantWarning: {
        border: `1px solid ${grey}`,
        background: Palette.white(),
        color: Palette.orange(),
      },
    },
    tooltip: {
      color: Palette.white(),
      background: Palette.black(),
      border: '',
      boxShadow: '',
      borderRadius: '5px',
      textSize: textSize_md,
    },
    emptyState: {
      border: `1px dotted ${borderColor}`,
      boxShadow: `0 1px 2px 0 rgba(0,0,0,.05)`,
      background: Palette.white(),
      color: textGrey,
    },
  },
}
