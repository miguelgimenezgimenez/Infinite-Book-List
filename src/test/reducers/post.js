/* eslint-disable no-unused-expressions */
import chai from 'chai'
import postReducer from '../../reducers/post'

chai.should()

const INITIAL_STATE = {
  eventPosts: [],
  loading: false,
  error: null,
  liveViews: {},
  reactions: {},
  streamStatus: {},
  current: null
}

describe('Post Reducers', () => {
  describe('POST_CREATED', () => {
    it('should handle POST_CREATED', () => {
      const post = { name: 'post4' }
      const firstState = { ...INITIAL_STATE, eventPosts: [post] }
      postReducer(undefined, { type: 'POST_CREATED', data: [post] }).should.deep.equal(firstState)
      const eventPosts = [{ name: 'post1' }, { name: 'post2' }, { name: 'post3' }]
      const secondState = { ...INITIAL_STATE, eventPosts }
      const updatedState = {
        ...firstState,
        eventPosts: [...eventPosts, post]
      }
      postReducer(secondState, { type: 'POST_CREATED', data: [post] }).should.deep.equal(updatedState)
    })

    it('should handle error', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      postReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })

  describe('POST_EVENT_POSTS_UPDATED', () => {
    it('should handle POST_EVENT_POSTS_UPDATED', () => {
      const posts = [
        { name: 'post1', id: 'postid1', status: 'UNPUBLISHED' },
        { name: 'post2', id: 'postid2', status: 'UNPUBLISHED' }]
      const firstState = { ...INITIAL_STATE, eventPosts: posts }
      const updatedPosts = [
        { name: 'post1', id: 'postid1', status: 'STARTED' },
        { name: 'post2', id: 'postid2', status: 'STARTED' }
      ]

      const updatedState = {
        ...firstState,
        eventPosts: updatedPosts
      }
      postReducer(firstState, { type: 'POST_EVENT_POSTS_UPDATED', data: updatedPosts }).should.deep.equal(updatedState)
    })

    it('should handle error', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      postReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })
  describe('POST_STREAM_STATUS_UPDATED', () => {
    it('should handle POST_STREAM_STATUS_UPDATED', () => {
      const firstState = { ...INITIAL_STATE }
      const updatedState = { ...INITIAL_STATE, streamStatus: { postId1: 'active' } }

      const streamStatus = [{ status: 'active' }]

      postReducer(firstState, { type: 'POST_STREAM_STATUS_UPDATED',
        data: { postId: 'postId1', streamStatus } }).should.deep.equal(updatedState)
    })

    it('should handle error', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      postReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })
})
