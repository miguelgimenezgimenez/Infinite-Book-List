/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import fetchMock from 'fetch-mock'
import { getOptions } from '../../utils/api'
import * as postActions from '../../actions/post'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  currentPost: null,
  eventPosts: [],
  loading: false,
  error: null
}

describe('Post Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('create', () => {
    const store = mockStore(INITIAL_STATE)

    const body = { name: 'Post' }

    it('dispatches loading and create actions with correct output data', () => {
      fetchMock.post('http://localhost:5050/post', { body }, getOptions(body, 'post'))
      const expectedActions = [
        { type: 'POST_LOADING' },
        { type: 'POST_CREATED', data: body }
      ]
      return postActions.create(store.dispatch, body.name).then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches the POST_CREATE_ERROR error', () => {
      fetchMock.post('http://localhost:5050/post', { error: 'get current error' }, getOptions(body, 'post'))
      return postActions.create(store.dispatch, body.name).then((res) => {
        store.getActions()[3].type.should.equal('POST_ERROR')
      })
    })
  })

  describe('getStreamStatus', () => {
    const store = mockStore(INITIAL_STATE)

    it('dispatches STREAM_STATUS_UPDATED actions with correct output data', () => {
      const body = {
        postId: 'postId1',
        streamStatus: 'active'

      }
      fetchMock.get('http://localhost:5050/post/postId1/stream-status', body)
      const expectedActions = [
        { type: 'POST_LOADING' },
        { type: 'POST_STREAM_STATUS_UPDATED', data: body }
      ]
      return postActions.getStreamStatus(store.dispatch, 'postId1').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches the POST_CREATE_ERROR error', () => {
      fetchMock.get('http://localhost:5050/post/postId1/stream-status', { error: 'getStreamStatus Error' })
      return postActions.getStreamStatus(store.dispatch, 'postId1').then((res) => {
        store.getActions()[3].type.should.equal('POST_ERROR')
      })
    })
  })
})
