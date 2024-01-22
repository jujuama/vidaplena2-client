import { ReactNode, useEffect, useState } from 'react'
import { MrbComponent } from '../../../helpers/common'
import { AdapterList } from './components/AdapterList'
import { ErrorList } from './components/ErrorList'
import { FormSettings } from './domain/formSettings'
import { InputConfiguration } from './domain/inputConfiguration'
import { FormValues } from './domain/values'
import { useErrors } from './hooks/errors'
import { useInputs } from './hooks/inputs'
import { useValues } from './hooks/values'
import { Styled } from './styled'

/**
 * @component MrbForm
 * @example example.txt
 * @description Provides a way to collect user input. Use it if you want to create a form, text input, textarea, select input or any other fields to enable user to create or edit items. The way the <MrbForm> component works is that all the inputs are inside the "inputs" attribute. You shall not create <MrbForm.Input> components as children of the MrbForm component. You shall only use inputs type that are defined in the documentation.
 * @prop {{key: string; label?: string; type: 'text' | 'email' | 'radio' | 'date' | 'number' | 'textarea' | 'select' | 'list' | 'checkbox';   isOptional?: boolean; options?: { label: string; value: any }[] ; inputs?: {type: 'text' | 'date' | 'textarea' | 'checkbox' | 'select' ; key: string; label?: string;}[];  }[]} inputs - All the different inputs of the form. @required
 * @prop {(values: any) => void} onSubmit - Function triggered on submit with the form values as parameter. @required
 * @prop {ReactNode} children - The slot for the submit button. @required
 * @prop {Record<string, any>} defaultValues - Default values to initialise inputs.
 * @prop {(values: any) => void} onChange - Function triggered on change with the form values as parameter.
 */

interface Props {
  inputs: InputConfiguration[]
  children?: ReactNode
  defaultValues?: FormValues
  settings?: FormSettings
  onSubmit?: (values: FormValues) => void
  onChange?: (values: FormValues) => void
}

export const MrbForm: MrbComponent<Props, typeof Styled> = ({
  inputs,
  children,
  settings = { emitStyle: 'onBlur' },
  defaultValues,
  onSubmit,
  onChange,
}) => {
  const valuesDefault = defaultValues ?? {}

  const { values, setValues } = useValues({ valuesDefault })

  const { adapters } = useInputs({ values, inputs })

  const { errors, save: saveErrors } = useErrors()

  const [errorsVisible, setErrorsVisible] = useState({})

  const [isReady, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  const handleSubmit = event => {
    event.preventDefault()

    setErrorsVisible(errors)

    if (Object.keys(errors).length > 0) {
      return
    }

    onSubmit(values)
  }

  const handleChange = ({ values: valuesUpdated }) => {
    setValues(valuesUpdated)

    onChange?.(valuesUpdated)
  }

  const handleError = ({ errors, key }) => {
    saveErrors(errors, key)
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <AdapterList
        settings={settings}
        values={values}
        errors={errorsVisible}
        adapters={adapters}
        onChange={handleChange}
        onError={handleError}
      />

      {isReady && children}

      {isReady && <ErrorList errors={errorsVisible} />}
    </Styled.Form>
  )
}

MrbForm.Styled = Styled

export type MrbFormInputConfiguration = InputConfiguration
