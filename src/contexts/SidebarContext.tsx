import React, { createContext, useContext, useState } from 'react'

interface SidebarContextProps {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface SidebarProviderProps {
  children: React.ReactNode
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
