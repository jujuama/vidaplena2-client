import { ReactNode } from 'react'
import { InputConfiguration, InputConfigurationType } from './index'

export namespace InputConfigurationManager {
  export function getType(input: InputConfiguration): InputConfigurationType {
    return input.type ?? 'text'
  }

  export function getKey(input: InputConfiguration): string {
    return input.key
  }

  export function getLabel(input: InputConfiguration): ReactNode {
    return input.label
  }

  export function getErrorLabel(input: InputConfiguration): string {
    const label = getLabel(input)
    const key = getKey(input)

    if (typeof label == 'string') {
      return label
    }

    return key
  }

  export function getIndication(input: InputConfiguration): ReactNode {
    return input.indication
  }

  export function getProps(input: InputConfiguration): Record<string, any> {
    return input.props ?? {}
  }

  export function getOptions<LabelType = ReactNode>(
    input: InputConfiguration,
  ): { label: LabelType; value: any }[] {
    return (input.options ?? []) as { label: LabelType; value: any }[]
  }

  export function getNestedInputs(
    input: InputConfiguration,
  ): InputConfiguration[] {
    return input.inputs ?? []
  }

  export function isOptional(configuration: InputConfiguration): boolean {
    return configuration.isOptional ?? false
  }

  export function getInputType(configuration: InputConfiguration): string {
    return configuration.props?.type ?? configuration.type
  }

  export function isInputTypePassword(
    configuration: InputConfiguration,
  ): boolean {
    return configuration.type === 'password'
  }
}
