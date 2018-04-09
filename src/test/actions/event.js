/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */

import configureMockStore from 'redux-mock-store'
import chai from 'chai'
import fetchMock from 'fetch-mock'
import localStorage from 'mock-local-storage'
import { getOptions } from '../../utils/api'
import * as eventActions from '../../actions/event'

const mockStore = configureMockStore()

chai.should()

const INITIAL_STATE = {
  currentEvent: null,
  error: null,
  events: [],
  loading: false
}

describe('Event Actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  describe('create', () => {
    const store = mockStore(INITIAL_STATE)

    const body = { name: 'Test Event', projectId: 'projectId' }

    it('dispatches loading and create actions with correct output data', () => {
      fetchMock.post(
        'http://localhost:5050/event',
        { ...body, id: 'eventId' },
        getOptions(body, 'post')
      )
      const expectedActions = [
        { type: 'EVENT_LOADING' },
        {
          type: 'EVENT_CREATED',
          data: { name: 'Test Event', id: 'eventId', projectId: 'projectId' }
        }
      ]
      return eventActions.create(store.dispatch, body.name, body.projectId).then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches an error', () => {
      fetchMock.post(
        'http://localhost:5050/event',
        { error: 'event create error' },
        getOptions(body, 'post')
      )
      return eventActions.create(store.dispatch, body.name).then((res) => {
        store.getActions()[3].type.should.equal('EVENT_ERROR')
      })
    })
  })

  describe('update', () => {
    const store = mockStore(INITIAL_STATE)

    const body = { name: 'Renamed Event' }

    it('dispatches loading and Update actions with correct output data', () => {
      fetchMock.put(
        'http://localhost:5050/event/eventId',
        { ...body, id: 'eventId' },
        getOptions(body, 'put')
      )

      const expectedActions = [
        { type: 'EVENT_LOADING' },
        { type: 'EVENT_UPDATED', data: { name: 'Renamed Event', id: 'eventId' } }
      ]
      return eventActions
        .update(store.dispatch, 'eventId', body.name)
        .then((res) => {
          store.getActions().should.deep.equal(expectedActions)
        })
    })

    it('dispatches an error', () => {
      fetchMock.put(
        'http://localhost:5050/event/123',
        { error: 'get current error' },
        getOptions(body, 'put')
      )
      return eventActions
        .update(store.dispatch, '123', body.name)
        .then((res) => {
          store.getActions()[3].type.should.equal('EVENT_ERROR')
        })
    })
  })

  describe('remove', () => {
    const store = mockStore(INITIAL_STATE)

    it('dispatches loading and removed actions with correct output data', () => {
      fetchMock.delete('http://localhost:5050/event/eventId', { id: 'eventId' })

      const expectedActions = [
        { type: 'EVENT_LOADING' },
        { type: 'EVENT_REMOVED', data: { id: 'eventId' } }
      ]
      return eventActions.remove(store.dispatch, 'eventId').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches an error', () => {
      fetchMock.delete('http://localhost:5050/event/eventId', {
        error: 'get current error'
      })
      return eventActions
        .remove(store.dispatch, 'eventId')
        .then((res) => {
          store.getActions()[3].type.should.equal('EVENT_ERROR')
        })
    })
  })

  describe('get', () => {
    const store = mockStore(INITIAL_STATE)
    const event = { name: 'project1', id: 'eventId' }

    it('dispatches loading and Get current actions with correct output data', () => {
      fetchMock.get('http://localhost:5050/event/eventId', event)

      const expectedActions = [
        { type: 'EVENT_LOADING' },
        { type: 'EVENT_FETCHED', data: event }
      ]
      return eventActions.get(store.dispatch, 'eventId').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches an error', () => {
      fetchMock.get('http://localhost:5050/event/eventId', { error: 'get current error' })
      return eventActions.get(store.dispatch, 'eventId').then((res) => {
        store.getActions()[3].type.should.equal('EVENT_ERROR')
      })
    })
  })

  describe('start all posts', () => {
    const store = mockStore(INITIAL_STATE)
    const eventPosts = [
      { name: 'post1', id: 'eventId', status: 'STARTED' },
      { name: 'post2', id: 'eventId2', status: 'STARTED' }
    ]

    it('dispatches loading and Get current actions with correct output data', () => {
      fetchMock.put('http://localhost:5050/event/eventId/startall', eventPosts)

      const expectedActions = [
        { type: 'EVENT_LOADING' },
        { type: 'EVENT_EVENT_POSTS_UPDATED', data: eventPosts }
      ]
      return eventActions.startAll(store.dispatch, 'eventId').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches an error', () => {
      fetchMock.put('http://localhost:5050/event/eventId/startall', { error: 'get current error' })
      return eventActions.startAll(store.dispatch, 'eventId').then((res) => {
        store.getActions()[3].type.should.equal('EVENT_ERROR')
      })
    })
  })

  describe('stop all posts', () => {
    const store = mockStore(INITIAL_STATE)
    const eventPosts = [
      { name: 'post1', id: 'eventId', status: 'UNPUBLISHED' },
      { name: 'post2', id: 'eventId2', status: 'UNPUBLISHED' }
    ]

    it('dispatches loading and Get current actions with correct output data', () => {
      fetchMock.put('http://localhost:5050/event/eventId/stopall', eventPosts)

      const expectedActions = [
        { type: 'EVENT_LOADING' },
        { type: 'EVENT_EVENT_POSTS_UPDATED', data: eventPosts }
      ]
      return eventActions.stopAll(store.dispatch, 'eventId').then((res) => {
        store.getActions().should.deep.equal(expectedActions)
      })
    })

    it('dispatches an error', () => {
      fetchMock.put('http://localhost:5050/event/eventId/stopall', { error: 'get current error' })
      return eventActions.stopAll(store.dispatch, 'eventId').then((res) => {
        store.getActions()[3].type.should.equal('EVENT_ERROR')
      })
    })
  })
})
