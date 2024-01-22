import { MrbAlertTheme } from '../components/atoms/MrbAlert/theme'
import { MrbButtonTheme } from '../components/atoms/MrbButton/theme'
import { MrbCardTheme } from '../components/atoms/MrbCard/theme'
import { MrbCheckboxTheme } from '../components/atoms/MrbCheckbox/theme'
import { MrbDescriptionTheme } from '../components/atoms/MrbDescription/theme'
import { MrbDividerTheme } from '../components/atoms/MrbDivider/theme'
import { MrbDropdownTheme } from '../components/atoms/MrbDropdown/theme'
import { MrbEmptyStateTheme } from '../components/atoms/MrbEmptyState/theme'
import { MrbFormLabel } from '../components/atoms/MrbFormLabel/theme'
import { MrbInputTheme } from '../components/atoms/MrbInput/theme'
import { MrbLinkTheme } from '../components/atoms/MrbLink/theme'
import { MrbListTheme } from '../components/atoms/MrbList/theme'
import {
  MrbLeftNavbarTheme,
  MrbNavbarTheme,
} from '../components/atoms/MrbNavbar/theme'
import { MrbNavbarDropdownTheme } from '../components/atoms/MrbNavbarDropdown/theme'
import { MrbNavbarLinkTheme } from '../components/atoms/MrbNavbarLink/theme'
import { MrbNavbarLogoTheme } from '../components/atoms/MrbNavbarLogo/theme'
import { MrbRadioTheme } from '../components/atoms/MrbRadio/theme'
import { MrbStepperTheme } from '../components/atoms/MrbStepper/theme'
import { MrbTableTheme } from '../components/atoms/MrbTable/theme'
import { MrbTabsTheme } from '../components/atoms/MrbTabs/theme'
import { MrbTagTheme } from '../components/atoms/MrbTag/theme'
import { MrbToastTheme } from '../components/atoms/MrbToast/theme'
import { MrbTooltipTheme } from '../components/atoms/MrbTooltip/theme'
import { MrbTypographyTheme } from '../components/atoms/MrbTypography/theme'
import { MrbHtmlTheme } from '../components/core/html/theme'
import { MrbKanbanTheme } from '../components/molecules/MrbKanban/theme'
import { MrbModalTheme } from '../components/molecules/MrbModal/theme'
import { MrbNotificationTheme } from '../components/molecules/MrbNotification/theme'

export type ThemeType = {
  space_0: string
  space_1: string
  space_2: string
  space_3: string
  space_4: string
  space_5: string

  breakpoint_xs: number
  breakpoint_sm: number
  breakpoint_md: number
  breakpoint_lg: number
  breakpoint_xl: number
  breakpoint_xxl: number

  borderRadius: string

  boxShadow: string

  ui_1: string
  ui_2: string
  ui_3: string

  colorPrimary: string
  colorSecondary: string
  colorDanger: string
  colorWarning: string
  colorSuccess: string
  colorDisabled: string

  textPrimary: string
  textSecondary: string

  textSize_xs: string
  textSize_sm: string
  textSize_md: string
  textSize_lg: string
  textSize_xl: string
  textSize_xxl: string

  components?: {
    alert?: MrbAlertTheme
    badge?: MrbTagTheme
    button?: MrbButtonTheme
    card?: MrbCardTheme
    checkbox?: MrbCheckboxTheme
    description?: MrbDescriptionTheme
    divider?: MrbDividerTheme
    formLabel?: MrbFormLabel
    input?: MrbInputTheme
    leftNavbar?: MrbLeftNavbarTheme
    link?: MrbLinkTheme
    list?: MrbListTheme
    modal?: MrbModalTheme
    navbar?: MrbNavbarTheme
    navbarLink?: MrbNavbarLinkTheme
    navbarLogo?: MrbNavbarLogoTheme
    navbarDropdown?: MrbNavbarDropdownTheme
    dropdown?: MrbDropdownTheme
    radio?: MrbRadioTheme
    stepper?: MrbStepperTheme
    table?: MrbTableTheme
    tabs?: MrbTabsTheme
    tag?: MrbTagTheme
    notification?: MrbNotificationTheme
    toast?: MrbToastTheme
    kanban?: MrbKanbanTheme
    tooltip?: MrbTooltipTheme
    typography?: MrbTypographyTheme
    html?: MrbHtmlTheme
    emptyState?: MrbEmptyStateTheme
  }
}
