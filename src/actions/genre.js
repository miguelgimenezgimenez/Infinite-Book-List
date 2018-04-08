import apiCall from '../../utils/api'

export const listForLetter = (dispatch, letter) => {
  dispatch({ type: 'GENRE_LIST_LOADING' })
  return apiCall(dispatch, `genre/list?letter=${letter}`, 'GENRE_LIST')
}
