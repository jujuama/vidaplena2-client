import { MrbCheckboxTheme } from '../components/atoms/MrbCheckbox/theme'
import { Palette } from './palette'
import { ThemeType } from './type'

const colorPrimary = `rgb(255, 255, 255)`
const colorPrimaryLighter = `rgb(255, 255, 255, 0.70)`
const colorSecondary = `#00A1EC`

const colorDanger = '#ff4444'
const colorWarning = '#FCC174'
const colorSuccess = '#86E2CF'

const textPrimary = '#EDEDED'
const textSecondary = '#A1A1A1'

const grayDarkest = '#0a0a0a'
const grayDarker = '#27272A'
const gray = '#808080'

const backgroundMain = '#080808'
const backgroundNav = '#080808'

const textSize_sm = '12px'
const textSize_md = '14px'

const boxShadow = '0 1px 2px 0 rgba(0,0,0,.05)'

const checkbox: MrbCheckboxTheme = {
  width: '20px',
  background: grayDarkest,
  border: `1px solid ${gray}`,
  checked: {
    background: colorPrimary,
    color: grayDarkest,
    border: `1px solid ${colorPrimary}`,
  },
  hover: {
    border: `1px solid ${Palette.grey_dark_3()}`,
  },
}

export const ThemeDark: ThemeType = {
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

  ui_1: grayDarker,
  ui_2: grayDarkest,
  ui_3: backgroundMain,

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
        background: Palette.grey_dark_1(10),
        color: Palette.grey_dark_1(),
        border: `1px solid ${Palette.grey_dark_1(30)}`,
      },
      primary: {
        color: Palette.black(),
        border: `1px solid ${colorPrimaryLighter}`,
        background: colorPrimary,
      },
      danger: {
        color: Palette.dark_red(),
        border: `1px solid ${Palette.dark_red(30)}`,
        background: Palette.dark_red(10),
      },
      success: {
        color: Palette.dark_green(),
        border: `1px solid ${Palette.dark_green(30)}`,
        background: Palette.dark_green(10),
      },
      warning: {
        color: Palette.dark_orange(),
        border: `1px solid ${Palette.dark_orange(30)}`,
        background: Palette.dark_orange(10),
      },
    },
    badge: {
      variantDefault: {
        color: Palette.white(),
        background: Palette.grey_1(),
        border: `none`,
      },
      variantPrimary: {
        color: Palette.black(),
        background: Palette.white(),
        border: `none`,
      },
      variantSecondary: {
        color: Palette.white(),
        background: Palette.grey_1(),
        border: `none`,
      },
      variantSuccess: {
        color: Palette.white(),
        background: Palette.dark_green(),
        border: `none`,
      },
      variantWarning: {
        color: Palette.white(),
        background: Palette.dark_orange(),
        border: `none`,
      },
      variantDanger: {
        color: Palette.white(),
        background: Palette.dark_red(),
        border: `none`,
      },
    },

    button: {
      variantDefault: {
        background: Palette.grey_dark_5(40),
        color: Palette.white(),
        border: `1px solid ${Palette.grey_dark_5(40)}`,
        hover: {
          background: Palette.grey_dark_5(50),
          color: Palette.grey_4(),
          border: `1px solid ${Palette.grey_dark_5(50)}`,
        },
        active: {
          background: Palette.grey_dark_5(60),
          color: Palette.grey_4(),
          border: `1px solid ${Palette.grey_dark_5(60)}`,
        },
      },
      variantPrimary: {
        background: Palette.white(),
        color: Palette.black(),
        border: `1px solid ${Palette.white(40)}`,
        hover: {
          background: Palette.white(90),
          border: `1px solid ${Palette.white(40)}`,
        },
        active: {
          background: Palette.white(80),
          border: `1px solid ${Palette.white(60)}`,
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
      variantSecondary: {
        background: `transparent`,
        color: Palette.white(),
        border: `1px solid ${grayDarkest}`,
        hover: {
          background: Palette.grey_dark_5(50),
          color: Palette.grey_4(),
          border: `1px solid ${Palette.grey_dark_5(50)}`,
        },
        active: {
          background: Palette.grey_dark_5(60),
          color: Palette.grey_4(),
          border: `1px solid ${Palette.grey_dark_5(60)}`,
        },
      },
      variantDanger: {
        background: Palette.dark_red(40),
        color: Palette.dark_red(),
        border: `1px solid ${Palette.dark_red(40)}`,
        hover: {
          background: Palette.dark_red(50),
          color: Palette.dark_red(),
          border: `1px solid ${Palette.dark_red(50)}`,
        },
        active: {
          background: Palette.dark_red(60),
          color: Palette.dark_red(),
          border: `1px solid ${Palette.dark_red(60)}`,
        },
      },
      variantWarning: {
        background: Palette.dark_orange(40),
        color: Palette.dark_orange(),
        border: `1px solid ${Palette.dark_orange(40)}`,
        hover: {
          background: Palette.dark_orange(50),
          color: Palette.dark_orange(),
          border: `1px solid ${Palette.dark_orange(50)}`,
        },
        active: {
          background: Palette.dark_orange(60),
          color: Palette.dark_orange(),
          border: `1px solid ${Palette.dark_orange(60)}`,
        },
      },
      variantSuccess: {
        background: Palette.dark_green(40),
        color: Palette.dark_green(),
        border: `1px solid ${Palette.dark_green(40)}`,
        hover: {
          background: Palette.dark_green(50),
          color: Palette.dark_green(),
          border: `1px solid ${Palette.dark_green(50)}`,
        },
        active: {
          background: Palette.dark_green(60),
          color: Palette.dark_green(),
          border: `1px solid ${Palette.dark_green(60)}`,
        },
      },
      variantDisabled: {
        background: Palette.grey_dark_4(10),
        color: Palette.grey_dark_4(60),
        border: `1px solid ${Palette.grey_dark_4(10)}`,
      },
    },
    card: {
      border: `1px solid ${grayDarker}`,
      background: backgroundMain,
      boxShadow: ``,
      hover: {
        background: `${gray}`,
      },
    },
    checkbox,
    description: {
      label: {
        color: textSecondary,
        fontWeight: '400',
      },
      value: {
        color: Palette.white(),
      },
    },
    divider: {
      color: grayDarker,
    },
    html: {
      color: textPrimary,
      background: 'black',
    },
    formLabel: {
      textSize: textSize_md,
      color: textPrimary,
      variantDanger: {
        color: colorDanger,
      },
      indication: {
        textSize: '13px',
        color: textSecondary,
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
        background: backgroundMain,
        color: textPrimary,
        border: `1px solid ${grayDarker}`,
        hover: {
          border: `1px solid ${grayDarker}`,
        },
        focus: {
          outline: `1px solid ${gray}`,
          border: `1px solid ${grayDarker}`,
        },
      },
    },
    leftNavbar: {
      background: backgroundNav,
      width: `250px`,
      borderRight: `1px solid ${grayDarker}`,
    },
    notification: {
      background: '0 4px 30px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${grayDarker}`,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      blur: {
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
    },
    link: {
      variantDefault: {
        color: textPrimary,
        borderColor: textPrimary,
        hover: {
          color: colorPrimary,
          borderColor: colorPrimary,
        },
      },
      variantPrimary: {
        color: colorPrimary,
        borderColor: 'transparent',
        hover: {
          color: colorPrimary,
          borderColor: colorPrimary,
        },
      },
    },
    list: {
      divider: { border: `1px solid ${grayDarker}` },
      item: {
        hover: {
          background: grayDarker,
        },
      },
    },
    modal: {
      background: grayDarkest,
      border: `1px solid ${grayDarker}`,
    },
    navbar: {
      background: backgroundNav,
      borderBottom: `1px solid ${grayDarker}`,
    },
    dropdown: {
      background: grayDarkest,
      border: `1px solid ${grayDarker}`,
    },
    kanban: {
      column: {
        background: grayDarkest,
      },
    },
    navbarLink: {
      color: textPrimary,
      background: 'transparent',
      border: '0px solid transparent',
      hover: {
        background: grayDarker,
      },

      active: {
        background: grayDarker,
      },
    },
    navbarLogo: {
      background: 'transparent',
      color: Palette.white(),
      border: `none`,
      shadowColor: 'none',
    },
    radio: checkbox,
    stepper: {
      active: {
        color: Palette.white(),
        borderColor: Palette.white(),
      },
      disabled: {
        color: grayDarker,
        borderColor: grayDarker,
      },
    },
    tabs: {
      item: {
        padding: '5px 13px 5px 13px',
        hover: {
          background: grayDarker,
        },
        active: {
          background: grayDarker,
        },
      },
    },
    table: {
      borderSpacing: `0`,
      boxShadow: ``,
      background: backgroundMain,
      head: {
        color: textSecondary,
        fontWeight: `normal`,
        borderBottom: `1px solid ${grayDarker}`,
      },
      body: {
        color: textPrimary,
        border: `0px`,
      },
      hover: {
        background: grayDarker,
        color: textPrimary,
        border: `0px`,
      },
    },
    tag: {
      padding: '0.125rem 0.625rem 0.125rem 0.625rem',
      textSize: '13px',
      variantDefault: {
        color: Palette.white(),
        background: `transparent`,
        border: `1px solid #F4F4F5`,
      },
      variantPrimary: {
        color: Palette.black(),
        background: Palette.white(),
        border: `none`,
      },
      variantSecondary: {
        color: Palette.white(),
        background: `transparent`,
        border: `1px solid ${grayDarker}`,
      },
      variantSuccess: {
        color: Palette.dark_green(),
        background: Palette.dark_green(10),
        border: `none`,
      },
      variantWarning: {
        color: Palette.dark_orange(),
        background: Palette.dark_orange(10),
        border: `none`,
      },
      variantDanger: {
        color: Palette.dark_red(),
        background: Palette.dark_red(10),
        border: `none`,
      },
    },
    toast: {
      boxShadow: ``,
      variantInfo: {
        border: `1px solid ${grayDarker}`,
        background: grayDarkest,
        color: Palette.dark_blue(),
      },
      variantDanger: {
        border: `1px solid ${grayDarker}`,
        background: grayDarkest,
        color: Palette.dark_red(),
      },
      variantSuccess: {
        border: `1px solid ${grayDarker}`,
        background: grayDarkest,
        color: Palette.dark_green(),
      },
      variantWarning: {
        border: `1px solid ${grayDarker}`,
        background: grayDarkest,
        color: Palette.dark_orange(),
      },
    },
    tooltip: {
      color: Palette.white(),
      background: backgroundMain,
      border: `1px solid ${gray}`,
      boxShadow: '',
      borderRadius: '5px',
      textSize: '14px',
    },
    typography: {
      h1: {
        color: textPrimary,
      },
      h2: {
        color: textPrimary,
      },
      h3: {
        color: textPrimary,
      },
      primary: {
        color: textPrimary,
      },
      secondary: {
        color: textSecondary,
      },
      caption: {
        color: textSecondary,
      },
    },
    emptyState: {
      border: `1px solid ${grayDarker}`,
      background: grayDarkest,
      color: textSecondary,
    },
  },
}
