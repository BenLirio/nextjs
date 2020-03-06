import React, { createContext, useState } from 'react'

const DialogContext = createContext()

export const DialogContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <DialogContext.Provider value={[open, setOpen]}>
      {children}
    </DialogContext.Provider>
  )
}

export default DialogContext
