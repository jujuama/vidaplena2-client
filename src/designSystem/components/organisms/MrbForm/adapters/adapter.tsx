import { FormSettings } from '../domain/formSettings'
import { InputConfiguration } from '../domain/inputConfiguration'
import { InputError } from '../domain/inputError'
import { FormValues } from '../domain/values'

export interface AdapterEventChange {
  values: FormValues
}

export interface AdapterEventError {
  errors: InputError[]
  key: string
}

export interface AdapterElement {
  values: FormValues
  errors: Record<string, InputError[]>
  input: InputConfiguration
  settings: FormSettings
  adapters: Adapter[]
  onChange: (props: AdapterEventChange) => void
  onError: (props: AdapterEventError) => void
}

export interface Adapter {
  Element: React.FC<AdapterElement>
  input: InputConfiguration
  adapters: Adapter[]
}
