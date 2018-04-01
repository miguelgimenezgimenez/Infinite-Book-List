
const INITIAL_STATE = {
  error: null,
  list: [],
  loading: false
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setLoading = (state, loading) => ({ ...state, loading })

const setBookList = (state, list) => ({ ...state, list: state.list.concat(list) })

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BOOK_LIST_LOADING':
      return setLoading(state, true)
    case 'BOOK_LIST_SUCCESS':
      return setBookList(state, action.data)
    case 'BOOK_LIST_ERROR':
      return setError(state, action.error)

    default:
      return state
  }
}