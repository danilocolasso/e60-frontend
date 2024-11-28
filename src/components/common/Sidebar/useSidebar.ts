import { useState } from 'react'

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    setIsOpen,
  }
}