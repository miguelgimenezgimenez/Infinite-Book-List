
const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setLoading = (state, loading) => ({ ...state, loading })

const setBookList = (state, data) => {
  const { bookList, letter } = data
  const list = { ...state.list }
  if (!list[letter]) list[letter] = bookList
  else list[letter] = list[letter].concat(bookList)
  return { ...state, list }
}

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
