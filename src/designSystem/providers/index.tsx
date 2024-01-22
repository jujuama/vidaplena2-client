'use client'

import { useReducer } from 'react'
import { MrbToast } from '..'
import { MrbToastList } from '../components/atoms/MrbToastList'

export const MrbContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MrbToast.Reducer, MrbToast.StateInitial)

  const toastValue = MrbToast.getProviderValue(state, dispatch)

  return (
    <MrbToast.Context.Provider value={toastValue}>
      <MrbToastList toasts={state.toasts} />
      {children}
    </MrbToast.Context.Provider>
  )
}
