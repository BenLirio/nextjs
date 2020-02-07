export default stats => {
  return {
    rating: Math.floor(stats.averageRating * 10) / 10,
    count: stats.count,
    percent: stats.recommendationRate
  }
}
