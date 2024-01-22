'use client'

import { ReactNode } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { ContextType, Provider } from './provider'
import { PropsHTML, Styled, Type } from './styled'

/**
 * @provider MrbToast
 * @description A toast provider accessible everywhere in the app
 * @function {(message: string) => void} info - Display an info toast
 * @function {(message: string) => void} success - Display a success toast
 * @function {(message: string) => void} error - Display an error toast
 * @function {(message: string) => void} warning - Display a warning toast
 * @usage  Declare `const toast = MrbToast.useToast()` then use it like `toast.info('Hello world')`
 * @import import {MrbToast} from '@/designSystem'
 */

interface Props extends PropsHTML {
  children: ReactNode
  type: Type
}

const { WrapperSuccess, WrapperWarning, WrapperError, WrapperInfo } = Styled

interface Functions {
  StateInitial: typeof Provider.StateInitial
  Reducer: typeof Provider.Reducer
  getProviderValue: typeof Provider.getProviderValue
  Context: typeof Provider.Context
  useToast: typeof Provider.useToast
}

export const MrbToast: MrbComponent<Props, typeof Styled> & Functions = ({
  children,
  type,
}) => {
  const mapping: Record<Type, ReactNode> = {
    plain: <>{children}</>,
    success: <WrapperSuccess>{children}</WrapperSuccess>,
    warning: <WrapperWarning>{children}</WrapperWarning>,
    error: <WrapperError>{children}</WrapperError>,
    info: <WrapperInfo>{children}</WrapperInfo>,
  }

  return mapping[type] ?? mapping['info']
}

MrbToast.StateInitial = Provider.StateInitial
MrbToast.Reducer = Provider.Reducer
MrbToast.getProviderValue = Provider.getProviderValue
MrbToast.Context = Provider.Context
MrbToast.useToast = Provider.useToast
MrbToast.Styled = Styled

export interface MrbToastAction extends Provider.Action {}
export type MrbToastContext = ContextType
