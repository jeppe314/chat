import React, { useState, createContext } from "react"

export const MenuContext = createContext()

export const MenuContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(true)

  return <MenuContext.Provider value={{ isOpen, setOpen }}>{children}</MenuContext.Provider>
}
