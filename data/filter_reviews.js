export default reviews => {
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
    .slice(1, 5)
}
