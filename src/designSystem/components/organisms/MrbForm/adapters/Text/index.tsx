import { useEffect } from 'react'
import { MrbInput } from '../../../../atoms'
import { MrbPasswordStrength } from '../../../../molecules'
import { FormSettingsManager } from '../../domain/formSettings'
import { InputConfigurationManager } from '../../domain/inputConfiguration'
import { InputFamilyDefault } from '../../inputFamily/inputFamily.default'
import { AdapterElement } from '../adapter'

export const TextAdapter: React.FC<AdapterElement> = ({
  values,
  input,
  settings,
  onChange,
  onError,
}) => {
  const inputFamily = new InputFamilyDefault({ input })

  const value = inputFamily.findValue(values)

  const props = InputConfigurationManager.getProps(input)

  useEffect(() => {
    const errorKey = inputFamily.getErrorKey()

    const errors = inputFamily.checkAndGetErrors(values)

    onError({ key: errorKey, errors })

    return () => {
      onError({ key: errorKey, errors: [] })
    }
  }, [])

  const handleChange = ({ value }) => {
    if (FormSettingsManager.canEmitOnChange(settings)) {
      handleBlur({ value })
    }
  }

  const handleBlur = ({ value }) => {
    const valuesUpdated = inputFamily.setValue(values, value)

    const errorKey = inputFamily.getErrorKey()

    const errors = inputFamily.checkAndGetErrors(valuesUpdated)

    onChange({ values: valuesUpdated })

    onError({ key: errorKey, errors })
  }

  const type = InputConfigurationManager.getInputType(input)

  const isPassword = InputConfigurationManager.isInputTypePassword(input)

  return (
    <>
      <MrbInput
        {...props}
        type={type}
        defaultValue={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {isPassword && <MrbPasswordStrength className="mt-2" value={value} />}
    </>
  )
}
