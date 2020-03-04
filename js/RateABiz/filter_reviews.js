import moment from 'moment'
import Reviews from '../../components/Home/Reviews/Reviews'

export default reviews => {
  const filteredReviews = reviews
    .map(review => {
      // User id & text & title
      const { id, text, title, rating, createdDate } = review
      // get name from first and last
      const { authorFirstName, authorLastName } = review
      const lastInitial =
        authorLastName && authorLastName.slice(0, 1).toUpperCase()
      const name = `${authorFirstName} ${lastInitial}.`
      // created
      const { month, day, year } = createdDate
      const created = moment(`${month}/${day}/${year}`)

      return { id, name, text, title, created, rating }
    })
    .sort((a, b) => {
      if (a.created.isBefore(b.created)) {
        return 1
      } else if (a.created.isAfter(b.created)) {
        return -1
      } else {
        return 0
      }
    })
  return filteredReviews
}
