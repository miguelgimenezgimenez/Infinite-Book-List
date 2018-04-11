import apiCall from '../../utils/api'

export const getBook = (dispatch, title) => {
  dispatch({ type: 'BOOK_LOADING' })
  return apiCall(dispatch, `book?title=${title}`, 'BOOK_CURRENT')
}

export const listForLetter = (dispatch, letter) => {
  dispatch({ type: 'BOOK_LOADING' })
  return apiCall(dispatch, `book/list?letter=${letter}`, 'BOOK_LIST')
}

export const listForAuthor = (dispatch, author) => {
  dispatch({ type: 'BOOK_LOADING' })
  return apiCall(dispatch, `book/authorList?author=${author}`, 'BOOK_LIST')
}

export const listForGenre = (dispatch, genre) => {
  dispatch({ type: 'BOOK_LOADING' })
  return apiCall(dispatch, `book/genreList?genre=${genre}`, 'BOOK_LIST')
}
