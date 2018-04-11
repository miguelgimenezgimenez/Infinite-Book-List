/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import fetchMock from 'fetch-mock'
import * as authorActions from '../../actions/author'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}

describe.only('Author Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  const authorList = [{ name: 'author1' }, { name: 'author2' }, { name: 'author3' }, { name: 'author4' }]

  describe('listForLetter', () => {
    const store = mockStore(INITIAL_STATE)

    it('dispatches loading and add actions with correct output data', () => {
      fetchMock.get('http://localhost:5050/author/list?letter=A', authorList)
      const expectedActions = [
        { type: 'AUTHOR_LOADING' },
        { type: 'AUTHOR_LIST_SUCCESS', data: authorList }
      ]

      return authorActions.listForLetter(store.dispatch, 'A').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })
  })
})
