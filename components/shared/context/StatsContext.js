import { createContext } from 'react'

const StatsContext = createContext()

export const StatsContextProvider = ({ stats, children }) => {
  return <StatsContext.Provider value={stats}>{children}</StatsContext.Provider>
}

export default StatsContext
