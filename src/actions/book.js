import apiCall from '../../utils/api'

export const listForLetter = (dispatch, letter) => {
  dispatch({ type: 'BOOK_LIST_LOADING' })
  return apiCall(dispatch, `book/list?letter=${letter}`, 'BOOK_LIST')
}

export const listForAuthor = (dispatch, author) => {
  dispatch({ type: 'BOOK_LIST_LOADING' })
  return apiCall(dispatch, `book/authorList?author=${author}`, 'BOOK_LIST')
}

export const listForGenre = (dispatch, genre) => {
  dispatch({ type: 'BOOK_LIST_LOADING' })
  return apiCall(dispatch, `book/genreList?genre=${genre}`, 'BOOK_LIST')
}
