import { useEffect } from 'react'
import { MrbDate } from '../../../../atoms'
import { InputConfigurationManager } from '../../domain/inputConfiguration'
import { InputFamilyDefault } from '../../inputFamily/inputFamily.default'
import { AdapterElement } from '../adapter'

export const DateAdapter: React.FC<AdapterElement> = ({
  values,
  input,
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
    const valuesUpdated = inputFamily.setValue(values, value)

    const errorKey = inputFamily.getErrorKey()

    const errors = inputFamily.checkAndGetErrors(valuesUpdated)

    onChange({ values: valuesUpdated })

    onError({ key: errorKey, errors })
  }

  return <MrbDate {...props} defaultValue={value} onChange={handleChange} />
}
