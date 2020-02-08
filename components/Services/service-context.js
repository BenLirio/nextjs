import { createContext, useState } from 'react'

const ServiceContext = createContext()

export const ServiceContextProvider = ({ children, items }) => {
  const [current, setCurrent] = useState(items[0])

  const context = {
    current,
    setCurrent,
    items
  }
  return (
    <ServiceContext.Provider value={context}>
      {children}
    </ServiceContext.Provider>
  )
}

export default ServiceContext
