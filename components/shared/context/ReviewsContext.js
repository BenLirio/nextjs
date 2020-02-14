import { createContext } from 'react'

const ReviewsContext = createContext()

export const ReviewsContextProvider = ({ reviews, children }) => {
  return (
    <ReviewsContext.Provider value={reviews}>
      {children}
    </ReviewsContext.Provider>
  )
}

export default ReviewsContext
