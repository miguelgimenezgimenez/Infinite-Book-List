
const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setLoading = (state, loading) => ({ ...state, loading })

const setAuthorList = (state, data) => {
  const { authorList, letter } = data
  const list = { ...state.list }
  if (!list[letter]) list[letter] = authorList
  else list[letter] = list[letter].concat(authorList)
  return { ...state, list, loading: false }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTHOR_LIST_LOADING':
      return setLoading(state, true)
    case 'AUTHOR_LIST_SUCCESS':
      return setAuthorList(state, action.data)
    case 'AUTHOR_LIST_ERROR':
      return setError(state, action.error)

    default:
      return state
  }
}
