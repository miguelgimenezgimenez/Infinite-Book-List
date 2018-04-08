
const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}
const setError = (state, error) => ({ ...state, error, loading: false })

const setLoading = (state, loading) => ({ ...state, loading })

const setGenreList = (state, data) => {
  const { genreList, type } = data
  const list = { ...state.list }
  if (!list[type]) list[type] = genreList
  else list[type] = list[type].concat(genreList)
  return { ...state, list, loading: false }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GENRE_LIST_LOADING':
      return setLoading(state, true)
    case 'GENRE_LIST_SUCCESS':
      return setGenreList(state, action.data)
    case 'GENRE_LIST_ERROR':
      return setError(state, action.error)

    default:
      return state
  }
}
