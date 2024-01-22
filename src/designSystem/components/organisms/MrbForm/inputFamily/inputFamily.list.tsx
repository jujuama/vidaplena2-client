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

export class InputFamilyList {
  private input: InputConfiguration

  constructor(options: ConstructorOptions) {
    this.input = options.input
  }

  findItems(values: FormValues): FormValues[] {
    const key = InputConfigurationManager.getKey(this.input)

    return values[key] ?? []
  }

  setValues(values: FormValues, value: any): FormValues {
    const key = InputConfigurationManager.getKey(this.input)

    return { ...values, [key]: value }
  }

  addItem(values: FormValues): FormValues {
    const key = InputConfigurationManager.getKey(this.input)

    const items = values[key] ?? []

    const item = { _id: Utility.getUUID() }

    return { ...values, [key]: [...items, item] }
  }

  removeItem(values: FormValues, itemToDelete: FormValues): FormValues {
    const key = InputConfigurationManager.getKey(this.input)

    const itemId = this.getItemId(itemToDelete)

    const items = this.findItems(values)

    const index = items.findIndex(item => this.getItemId(item) === itemId)

    if (index < 0) {
      throw new Error(`Could not find item "${itemId}" for key "${key}"`)
    }

    items.splice(index, 1)

    return { ...values, [key]: items }
  }

  updateItem(values: FormValues, itemToUpdate: FormValues): FormValues {
    const key = InputConfigurationManager.getKey(this.input)

    const itemId = this.getItemId(itemToUpdate)

    const items = this.findItems(values)

    const index = items.findIndex(item => this.getItemId(item) === itemId)

    if (index < 0) {
      throw new Error(`Could not find item "${itemId}" for key "${key}"`)
    }

    items[index] = itemToUpdate

    return { ...values, [key]: items }
  }

  getItemId(values: FormValues): string {
    return values._id
  }

  getErrorKey(): string {
    return InputConfigurationManager.getKey(this.input)
  }

  getItemErrorKey(item: FormValues, key: string): string {
    const id = this.getItemId(item)
    const keyParent = InputConfigurationManager.getKey(this.input)
    const errorKey = `${keyParent}/${id}/${key}`

    return errorKey
  }

  buildItemErrors(
    values: FormValues,
    item: FormValues,
    errors: InputError[],
  ): InputError[] {
    if (errors.length === 0) {
      return []
    }

    const key = InputConfigurationManager.getKey(this.input)
    const label = InputConfigurationManager.getLabel(this.input)

    const itemId = this.getItemId(item)

    const items = this.findItems(values)

    const index = items.findIndex(item => this.getItemId(item) === itemId)

    if (index < 0) {
      throw new Error(`Could not find item "${itemId}" for key "${key}"`)
    }

    const message = `${label ?? key} (#${index + 1})`

    return errors.map(error => ({
      ...error,
      key: this.getItemErrorKey(item, error.key),
      message: `${message} ${error.message}`,
    }))
  }

  filterItemErrors(
    item: FormValues,
    errorsByKeys: Record<string, InputError[]>,
  ): Record<string, InputError[]> {
    const errorKey = this.getItemErrorKey(item, '')

    const errorsFiltered = {}
    for (const [key, errors] of Object.entries(errorsByKeys)) {
      if (key.startsWith(errorKey)) {
        const keyUpdated = key.replace(errorKey, '')

        errorsFiltered[keyUpdated] = errors.map(error => ({
          ...error,
          key: keyUpdated,
        }))
      }
    }

    return errorsFiltered
  }
}
