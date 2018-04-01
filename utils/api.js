import config from '../config'

const { API_URL } = config[process.env.NODE_ENV]

const apiCall = (dispatch, endpoint, type) =>
  fetch(`${API_URL}/${endpoint}`)
    .then(response => response.json())
    .then((data) => {
      if (data.error) throw new Error(data.error)
      dispatch({ type: `${type}_SUCCESS`, data })
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error)
      dispatch({ type: `${type}_ERROR`, error })
    })

export default apiCall
