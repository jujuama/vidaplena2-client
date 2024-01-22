import {
  InputConfiguration,
  InputConfigurationManager,
  InputConfigurationType,
} from '../domain/inputConfiguration'
import { CheckboxAdapter } from './Checkbox'
import { DateAdapter } from './Date'
import { ListAdapter } from './List'
import { NumberAdapter } from './Number'
import { RadioAdapter } from './Radio'
import { SelectAdapter } from './Select'
import { TextAdapter } from './Text'
import { TextareaAdapter } from './Textarea'
import { Adapter, AdapterElement } from './adapter'

export class AdapterFactory {
  private mapping: Record<InputConfigurationType, React.FC<AdapterElement>> = {
    checkbox: CheckboxAdapter,
    date: DateAdapter,
    number: NumberAdapter,
    list: ListAdapter,
    radio: RadioAdapter,
    select: SelectAdapter,
    text: TextAdapter,
    email: TextAdapter,
    password: TextAdapter,
    textarea: TextareaAdapter,
    time: TextAdapter,
  }

  constructor() {}

  create(input: InputConfiguration): Adapter {
    const Element = this.createElement(input)

    const nestedInputs = InputConfigurationManager.getNestedInputs(input)

    const adapters = nestedInputs.map(nestedInput => this.create(nestedInput))

    return {
      Element,
      input,
      adapters,
    }
  }

  private createElement(input: InputConfiguration): React.FC<AdapterElement> {
    const type = InputConfigurationManager.getType(input)

    return this.mapping[type] ?? this.mapping['text']
  }
}
