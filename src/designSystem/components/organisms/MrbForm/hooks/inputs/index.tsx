import { useEffect, useState } from 'react'
import { Adapter } from '../../adapters/adapter'
import { AdapterFactory } from '../../adapters/adapter.factory'
import { InputConfiguration } from '../../domain/inputConfiguration'
import { FormValues } from '../../domain/values'

interface Props {
  values: FormValues
  inputs: InputConfiguration[]
}

type ReturnType = {
  adapters: Adapter[]
}

export const useInputs = ({ inputs, values }: Props): ReturnType => {
  const [adapters, setAdapters] = useState([])

  const factory = new AdapterFactory()

  useEffect(() => {
    const inputsFiltered = inputs.filter(
      input => !input.isVisible || input.isVisible(values),
    )

    const adapters = inputsFiltered.map(input => factory.create(input))

    setAdapters(adapters)
  }, [values, inputs])

  return {
    adapters,
  }
}
