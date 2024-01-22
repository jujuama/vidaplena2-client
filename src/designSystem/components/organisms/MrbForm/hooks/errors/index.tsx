import { useState } from 'react'
import { InputError } from '../../domain/inputError'

interface Props {}

type ReturnType = {
  errors: Record<string, InputError[]>
  save: (errors: InputError[], key: string) => void
}

export const useErrors = (): ReturnType => {
  const [store, setStore] = useState({})

  const setErrors = (errors: InputError[], key: string) => {
    setStore(storeBefore => {
      return {
        ...storeBefore,
        [key]: errors,
      }
    })
  }

  const deleteErrors = (key: string) => {
    setStore(storeBefore => {
      const storeAfter = { ...storeBefore }

      delete storeAfter[key]

      return storeAfter
    })
  }

  const save = (errors: InputError[], key: string) => {
    if (errors.length === 0) {
      deleteErrors(key)
    } else {
      setErrors(errors, key)
    }
  }

  return {
    errors: store,
    save,
  }
}
