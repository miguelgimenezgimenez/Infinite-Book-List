import apiCall from '../../utils/api'

export const listForLetter = (dispatch, letter) => {
  dispatch({ type: 'AUTHOR_LOADING' })
  return apiCall(dispatch, `author/list?letter=${letter}`, 'AUTHOR_LIST')
}
