/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import fetchMock from 'fetch-mock'
import * as bookActions from '../../actions/book'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  error: null,
  list: {},
  loading: false
}

describe.only('Channel Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('add', () => {
    const store = mockStore(INITIAL_STATE)

    const body = { name: 'Youtube' }

    it('dispatches loading and add actions with correct output data', () => {
      fetchMock.get('http://localhost:5050/book', { ...body }, getOptions(body, 'post'))
      const expectedActions = [
        { type: 'CHANNEL_LOADING' },
        { type: 'CHANNEL_ADDED', data: { name: 'Youtube' } }
      ]

      return channelActions.add(store.dispatch, body).then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })
  })
})
