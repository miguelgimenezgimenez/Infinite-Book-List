/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import bookReducer from '../../reducers/book'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false,
  current: {}
}
const bookList = ['Pillars of the Earth', 'Pandemia', 'Psychology']
const data = { type: 'P', bookList }

const bookListK = ['Killing Amy', 'Ko', 'Kiss']
const dataK = { type: 'K', bookList: bookListK }

describe.only('Book Reducer', () => {
  describe('BOOK_LIST_SUCCESS', () => {
    const store = mockStore(INITIAL_STATE)
    it('should handle BOOK_LIST_SUCCESS', () => {
      const updatedState = { ...INITIAL_STATE, list: { P: bookList } }
      bookReducer(undefined, { type: 'BOOK_LIST_SUCCESS', data }).should.deep.equal(updatedState)
    })
    it('should append items to the list', () => {
      const firstState = { ...INITIAL_STATE, list: { P: bookList } }
      const updatedState = { ...INITIAL_STATE, list: { P: bookList, K: bookListK } }
      bookReducer(firstState, { type: 'BOOK_LIST_SUCCESS', data: dataK }).should.deep.equal(updatedState)
    })

    it('should handle error', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      bookReducer(undefined, { type: 'BOOK_LIST_ERROR', error }).should.deep.equal(updatedState)
    })
  })
})
