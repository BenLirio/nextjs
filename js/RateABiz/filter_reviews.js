import moment from 'moment'
import Reviews from '../../components/Home/Reviews/Reviews'

export default reviews => {
  const filteredReviews = reviews
    .map(review => {
      // User id & text & title
      const { id, text, title, rating } = review
      // get name from first and last
      const { authorFirstName, authorLastName } = review
      const lastInitial =
        authorLastName && authorLastName.slice(0, 1).toUpperCase()
      const name = `${authorFirstName} ${lastInitial}.`
      // created
      if (authorFirstName == 'Jamel') {
        console.log('review', review)
      }
      const created = moment(review.createdDate)

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
  return reviews
    .sort((a, b) => {
      const dateOne =
        a.createdDate.year * 365 + a.createdDate.month * 12 + a.createdDate.day
      const dateTwo =
        b.createdDate.year * 365 + b.createdDate.month * 12 + b.createdDate.day
      return dateTwo - dateOne
    })
    .map(review => {
      return {
        id: review.id,
        name: review.authorFirstName || '' + ' ' + review.authorLastName || '',
        rating: review.rating,
        title: review.title || '',
        text: review.text || ''
      }
    })
}
