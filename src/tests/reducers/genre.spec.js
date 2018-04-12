/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import GenreReducer from '../../reducers/Genre'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}
const genreList = ['Terror', 'Terrorism', 'Thriller']
const data = { type: 'T', genreList }
const genreListL = ['Love', 'Labor', 'Latin']
const dataL = { type: 'L', genreList: genreListL }

describe.only('Genre Reducer', () => {
  describe('GENRE_LIST_SUCCESS', () => {
    const store = mockStore(INITIAL_STATE)
    it('should handle GENRE_LIST_SUCCESS', () => {
      const updatedState = { ...INITIAL_STATE, list: { T: genreList } }
      GenreReducer(undefined, { type: 'GENRE_LIST_SUCCESS', data }).should.deep.equal(updatedState)
    })
    it('should append items to the list', () => {
      const firstState = { ...INITIAL_STATE, list: { T: genreList } }
      const updatedState = { ...INITIAL_STATE, list: { T: genreList, L: genreListL } }
      GenreReducer(firstState, { type: 'GENRE_LIST_SUCCESS', data: dataL }).should.deep.equal(updatedState)
    })

    it('should handle error', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      GenreReducer(undefined, { type: 'GENRE_LIST_ERROR', error }).should.deep.equal(updatedState)
    })
  })
})
