/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import fetchMock from 'fetch-mock'
import * as genreActions from '../../actions/genre'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}

describe.only('Genre Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  const genreList = [{ name: 'genre1' }, { name: 'genre2' }, { name: 'genre3' }, { name: 'genre4' }]

  describe('listForLetter', () => {
    const store = mockStore(INITIAL_STATE)

    it('dispatches loading and add actions with correct output data', () => {
      fetchMock.get('http://localhost:5050/genre/list?letter=A', genreList)
      const expectedActions = [
        { type: 'GENRE_LIST_LOADING' },
        { type: 'GENRE_LIST_SUCCESS', data: genreList }
      ]

      return genreActions.listForLetter(store.dispatch, 'A').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })
  })
})
