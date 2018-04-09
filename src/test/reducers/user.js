/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import chai from 'chai'
import userReducer from '../../reducers/user'

chai.should()
const INITIAL_STATE = {
  isAuthenticated: false,
  loading: false,
  error: null
}

describe('User Reducers', () => {
  describe('USER_LOGIN', () => {
    it('should handle USER_LOGIN', () => {
      const firstState = {
        isAuthenticated: true,
        loading: false,
        error: null
      }
      userReducer(INITIAL_STATE, { type: 'USER_LOGIN', data: { token: 'token1234' } }).should.deep.equal(firstState)
      expect(localStorage.setItem).toHaveBeenLastCalledWith('token', 'token1234')
    })

    it('should handle error', () => {
      const error = 'login error'
      const updatedState = { ...INITIAL_STATE, error }
      userReducer(INITIAL_STATE, { type: 'USER_ERROR', error }).should.deep.equal(updatedState)
    })
  })
  describe('USER_LOGOUT', () => {
    it('should handle USER_LOGOUT', () => {
      const firstState = {
        isAuthenticated: true,
        loading: false,
        error: null
      }
      const logoutState = {
        isAuthenticated: false,
        loading: false,
        error: null
      }
      userReducer(firstState, { type: 'USER_LOGOUT' }).should.deep.equal(logoutState)
      expect(localStorage.removeItem).toHaveBeenLastCalledWith('token')
    })

    it('should handle error', () => {
      const error = 'login error'
      const updatedState = { ...INITIAL_STATE, error }
      userReducer(INITIAL_STATE, { type: 'USER_ERROR', error }).should.deep.equal(updatedState)
    })
  })
})
