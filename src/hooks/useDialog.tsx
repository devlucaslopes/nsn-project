import { useState } from 'react'

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggleDialog
  }
}
