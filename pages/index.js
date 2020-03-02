import React from 'react'
import Reviews from '../components/Home/Reviews/Reviews'
import MapRow from '../components/Home/MapRow/MapRow'
import Ada from '../components/Home/Ada/Ada'
import NewSmile from '../components/Home/NewSmile/NewSmile'
import YourDoctor from '../components/Home/YourDoctor/YourDoctor'
import { ReviewsContextProvider } from '../components/shared/context/ReviewsContext'
import { StatsContextProvider } from '../components/shared/context/StatsContext'
import data from '../js/RateABiz/data.json'
import filterReviews from '../js/RateABiz/filter_reviews'
import filterStats from '../js/RateABiz/filter_stats'

export default function Index({ reviews, stats }) {
  return (
    <>
      <NewSmile />
      <YourDoctor />
      <ReviewsContextProvider reviews={reviews}>
        <StatsContextProvider stats={stats}>
          <Reviews stats={stats} reviews={reviews} />
        </StatsContextProvider>
      </ReviewsContextProvider>
      <Ada />
      <MapRow />
    </>
  )
}

// Runs before anything else in the happens
// Kind of a problem because the first page paint
// happens after the page loads
Index.getInitialProps = async function() {
  // const res = await fetch(API_URL)
  // const data = await res.json()
  const stats = filterStats(data.stats)
  const reviews = filterReviews(data.reviews)
  return {
    reviews,
    stats
  }
}
