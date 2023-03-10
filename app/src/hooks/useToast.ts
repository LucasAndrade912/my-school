import { useContext } from 'react'

import { ToastContext } from '../context/ToastContext'

export function useToast() {
  const context = useContext(ToastContext)

  return context
}