import { MrbFormLabel } from '../../../../../'
import { MrbComponent } from '../../../../../helpers/common'
import {
  Adapter,
  AdapterEventChange,
  AdapterEventError,
} from '../../adapters/adapter'
import { FormSettings } from '../../domain/formSettings'

import {
  InputConfiguration,
  InputConfigurationManager,
} from '../../domain/inputConfiguration'
import { InputError } from '../../domain/inputError'
import { FormValues } from '../../domain/values'
import { Styled } from './styled'

interface Props {
  values: FormValues
  adapters: Adapter[]
  settings: FormSettings
  errors: Record<string, InputError[]>
  onChange: (props: AdapterEventChange) => void
  onError: (props: AdapterEventError) => void
}

export const AdapterList: MrbComponent<Props, typeof Styled> = ({
  values,
  adapters,
  errors,
  settings,
  onChange,
  onError,
}) => {
  const getInputError = (input: InputConfiguration) => {
    const key = InputConfigurationManager.getKey(input)
    const errorsByInput = errors[key] ?? []

    return errorsByInput
  }

  const hasInputError = (input: InputConfiguration) => {
    const errorsByInput = getInputError(input)

    return errorsByInput.length > 0
  }

  return (
    <Styled.Wrapper>
      {adapters.map(({ Element, input, adapters }, adapterIndex) => (
        <MrbFormLabel
          key={adapterIndex}
          label={input.label}
          indication={input.indication}
          isOptional={InputConfigurationManager.isOptional(input)}
          hasError={hasInputError(input)}
        >
          <Element
            values={values}
            errors={errors}
            settings={settings}
            input={input}
            adapters={adapters}
            onChange={onChange}
            onError={onError}
          />
        </MrbFormLabel>
      ))}
    </Styled.Wrapper>
  )
}

AdapterList.Styled = Styled
