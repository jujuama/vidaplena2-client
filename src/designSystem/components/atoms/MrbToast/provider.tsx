'use client'

import { Utility } from '@/libraries/utility'
import { ReactNode, createContext, useContext } from 'react'
import { Type } from './styled'

interface Props {
  type: Type
  children: ReactNode
}

export interface ContextType {
  plain: (content: ReactNode) => void
  info: (message: string) => void
  success: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
}

interface ActionLocal {
  id: string
  type: 'ADD_TOAST' | 'DELETE_TOAST'
  toast: Props
}

interface State {
  toasts: ActionLocal[]
}

export const ContextLocal = createContext<ContextType>(undefined)

const useToastLocal = () => useContext(ContextLocal)

export namespace Provider {
  export const StateInitial: State = { toasts: [] }

  export interface Action extends ActionLocal {}

  export const Context = ContextLocal

  export const useToast = useToastLocal

  export const Reducer = (state: State, action: ActionLocal) => {
    switch (action.type) {
      case 'ADD_TOAST':
        return {
          ...state,
          toasts: [...state.toasts, action],
        }
      case 'DELETE_TOAST':
        const updatedToasts = state.toasts.filter(
          toast => toast.id !== action.id,
        )
        return {
          ...state,
          toasts: updatedToasts,
        }
      default:
        throw new Error(`Unhandled toast type: ${action.type}`)
    }
  }

  const addToast = (
    setState: (action: ActionLocal) => void,
    type: Type,
    message: ReactNode,
  ) => {
    const LIFETIME_SECONDS = 6
    const id = Utility.getUUID()
    const toast: Props = { type, children: message }

    setState({ id, type: 'ADD_TOAST', toast })

    setTimeout(() => {
      setState({ id, type: 'DELETE_TOAST', toast })
    }, LIFETIME_SECONDS * 1000)
  }

  const removeToast = (setState: (action: ActionLocal) => void, id: string) => {
    const toast: Props = { type: 'info', children: '' }
    setState({ id, type: 'DELETE_TOAST', toast })
  }

  export function getProviderValue(
    state: State,
    setState: (action: ActionLocal) => void,
  ): ContextType {
    return {
      plain: (content: ReactNode) => {
        addToast(setState, 'plain', content)
      },
      info: (message: string) => {
        addToast(setState, 'info', message)
      },
      success: (message: string) => {
        addToast(setState, 'success', message)
      },
      warning: (message: string) => {
        addToast(setState, 'warning', message)
      },
      error: (message: string) => {
        addToast(setState, 'error', message)
      },
    }
  }
}
