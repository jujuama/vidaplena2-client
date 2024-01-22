import { ReactNode } from 'react'
import { FormValues } from '../values'

export interface InputConfiguration {
  key: string
  type?: InputConfigurationType
  label?: string
  isOptional?: boolean
  indication?: ReactNode
  props?: {
    placeholder?: string
    [key: string]: any
  }
  orientation?: 'horizontal' | 'vertical'
  options?: {
    label: ReactNode
    value: any
  }[]
  inputs?: InputConfiguration[]
  isVisible?: (values: FormValues) => boolean
}

export type InputConfigurationType =
  | 'checkbox'
  | 'date'
  | 'list'
  | 'number'
  | 'email'
  | 'password'
  | 'radio'
  | 'select'
  | 'text'
  | 'time'
  | 'textarea'

export * from './manager'
