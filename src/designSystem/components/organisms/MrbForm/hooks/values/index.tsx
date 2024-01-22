import { useState } from 'react'
import { FormValues } from '../../domain/values'

interface Props {
  valuesDefault: FormValues
}

type ReturnType = {
  values: FormValues
  setValues: (values: FormValues) => void
}

export const useValues = ({ valuesDefault }: Props): ReturnType => {
  const [values, setValues] = useState(valuesDefault)

  return {
    values,
    setValues,
  }
}
