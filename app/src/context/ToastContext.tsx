import { useState, createContext, ReactNode } from 'react'

import { Toast } from '../components/Toast'

interface ToastProps {
  status: 'success' | 'error'
  message: string
}

interface ToastContextProps {
  show: (status: 'success' | 'error', message: string) => void
}

export const ToastContext = createContext({} as ToastContextProps)

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [show, setShow] = useState(false)
  const [toastInfo, setToastInfo] = useState({} as ToastProps)

  function showToast(status: 'success' | 'error', message: string) {
    setShow(true)
    setToastInfo({ status, message })
  }

  function outToast() {
    setShow(false)
    setToastInfo({} as ToastProps)
  }

  return (
    <ToastContext.Provider value={{ show: showToast }}>
      { show && (
        <Toast
          status={toastInfo.status}
          message={toastInfo.message}
          onResetStates={outToast}
        />
      ) }

      { children }
    </ToastContext.Provider>
  )
}