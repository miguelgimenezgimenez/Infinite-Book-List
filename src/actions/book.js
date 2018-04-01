import apiCall from '../../utils/api'

export const listForLetter = (dispatch, letter) => {
  dispatch({ type: 'BOOK_LIST_LOADING' })
  return apiCall(dispatch, `book/list?letter=${letter}`, 'BOOK_LIST')
}
