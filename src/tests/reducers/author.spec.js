/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import authorReducer from '../../reducers/author'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}
const authorList = ['Ken Follet', 'Kim Basinger', 'Kin Kong']
const data = { type: 'K', authorList }

const authorListD = ['Dan Brown', 'Dan Simmons']
const dataD = { type: 'D', authorList: authorListD }

describe.only('Author Reducer', () => {
  describe('AUTHOR_LIST_SUCCESS', () => {
    const store = mockStore(INITIAL_STATE)
    it('should handle AUTHOR_LIST_SUCCESS', () => {
      const updatedState = { ...INITIAL_STATE, list: { K: authorList } }
      authorReducer(undefined, { type: 'AUTHOR_LIST_SUCCESS', data }).should.deep.equal(updatedState)
    })

    it('should append items to the list', () => {
      const firstState = { ...INITIAL_STATE, list: { P: authorList } }
      const updatedState = { ...INITIAL_STATE, list: { P: authorList, D: authorListD } }
      authorReducer(firstState, { type: 'AUTHOR_LIST_SUCCESS', data: dataD }).should.deep.equal(updatedState)
    })

    it('should handle error', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      authorReducer(undefined, { type: 'AUTHOR_LIST_ERROR', error }).should.deep.equal(updatedState)
    })
  })
})
