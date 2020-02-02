class ReviewsInterface {
  constructor() {
    this.reviews = []
  }
  addReview({
    authorLastName,
    createdDate,
    authorFirstName,
    rating,
    id,
    text,
    title
  }) {
    if (
      !!(authorFirstName && authorLastName && rating && id && text && title)
    ) {
      const name = authorFirstName + ' ' + authorLastName
      const key = id
      const review = {
        title,
        text
      }
      this.reviews.push(new Review(key, name, text))
    } else {
      console.log('id: ', id, 'failed to load')
    }
  }
  index() {
    return this.reviews.map(review => {
      return {
        key: review.key,
        name: review.name,
        text: review.text
      }
    })
  }
}
class Review {
  constructor(key, name, text) {
    this.key = key
    this.name = name
    this.text = text
  }
}
export default ReviewsInterface
