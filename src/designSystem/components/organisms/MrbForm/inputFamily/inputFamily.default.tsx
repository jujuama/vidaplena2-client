import { PasswordLibrary } from '../../../../helpers/password'
import { StringLibrary } from '../../../../helpers/string'
import { Utility } from '../../../../helpers/utility'
import {
  InputConfiguration,
  InputConfigurationManager,
} from '../domain/inputConfiguration'
import { InputError } from '../domain/inputError'
import { FormValues } from '../domain/values'

interface ConstructorOptions {
  input: InputConfiguration
}

export class InputFamilyDefault<ValueType = string> {
  private input: InputConfiguration

  constructor(options: ConstructorOptions) {
    this.input = options.input
  }

  findValue(values: FormValues): ValueType {
    const key = InputConfigurationManager.getKey(this.input)

    return values[key]
  }

  setValue(values: FormValues, value: ValueType): FormValues {
    const key = InputConfigurationManager.getKey(this.input)

    return { ...values, [key]: value }
  }

  getErrorKey(): string {
    return InputConfigurationManager.getKey(this.input)
  }

  checkAndGetErrors(values: FormValues): InputError[] {
    const errors: InputError[] = []

    const checks: ((values: FormValues) => Omit<InputError, 'key'>[])[] = [
      this.checkRequired.bind(this),
      this.checkPassword.bind(this),
    ]

    const key = InputConfigurationManager.getKey(this.input)

    for (const check of checks) {
      const errorsFound = check(values).map(error => ({ ...error, key }))

      errors.push(...errorsFound)
    }

    return errors
  }

  private checkRequired(values: FormValues): Omit<InputError, 'key'>[] {
    const errors: Omit<InputError, 'key'>[] = []

    if (InputConfigurationManager.isOptional(this.input)) {
      return errors
    }

    const value = this.findValue(values)

    const isString = typeof value === 'string'

    if (isString) {
      if (StringLibrary.isDefined(value)) {
        return errors
      }
    } else if (Utility.isDefined(value)) {
      return errors
    }

    const label = InputConfigurationManager.getErrorLabel(this.input)

    errors.push({ message: `${label} is required` })

    return errors
  }

  private checkPassword(values: FormValues): Omit<InputError, 'key'>[] {
    const errors: Omit<InputError, 'key'>[] = []

    const isPassword = InputConfigurationManager.isInputTypePassword(this.input)

    if (!isPassword) {
      return errors
    }

    const value = this.findValue(values) as string

    if (!StringLibrary.isDefined(value)) {
      return errors
    }

    const label = InputConfigurationManager.getErrorLabel(this.input)

    const result = PasswordLibrary.analyse(value)

    const hasErrors = Object.values(result).some(isOk => !isOk)

    if (hasErrors) {
      errors.push({ message: `${label} must satisfy security requirements` })
    }

    return errors
  }
}
