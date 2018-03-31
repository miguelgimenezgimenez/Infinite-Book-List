import config from '../config'

const { googleApiKey } = config[process.env.NODE_ENV]

const apiCall = (dispatch, endpoint, type) =>
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${endpoint}&key=${googleApiKey}`)
    .then(response => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error)
      console.log(data)
      data.items.forEach((book) => {
        console.log(book.volumeInfo.title)
      })
      dispatch({ type, data })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: 'ERROR', error })
    })
export { apiCall }
