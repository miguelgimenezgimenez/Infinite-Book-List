/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import fetchMock from 'fetch-mock'
import { getOptions } from '../../utils/api'
import * as userActions from '../../actions/user'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  isAuthenticated: false,
  loading: false,
  error: null
}
describe('Post Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('login', () => {
    const store = mockStore(INITIAL_STATE)

    const body = { token: 'token1234' }

    it('dispatches loading and login actions with correct output data', () => {
      fetchMock.post('http://localhost:5050/user/login', { body }, getOptions(body, 'post'))
      const expectedActions = [
        { type: 'USER_LOADING' },
        { type: 'USER_LOGIN', data: body }
      ]
      return userActions.login(store.dispatch, body).then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })
  })
  describe('logout', () => {
    const store = mockStore(INITIAL_STATE)

    it('dispatches logout actions ', () => {
      const expectedActions = [
        { type: 'USER_LOGOUT' }
      ]
      userActions.logout(store.dispatch)
      store.getActions().should.deep.equal(expectedActions)
    })
  })
})
