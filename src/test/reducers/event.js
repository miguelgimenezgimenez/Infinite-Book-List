/* eslint-disable no-unused-expressions */
import chai from 'chai'
import eventsReducer from '../../reducers/event'

chai.should()

const INITIAL_STATE = {
  current: null,
  error: null,
  list: [],
  loading: false
}

describe('Events Reducers', () => {
  describe('EVENT_LIST_FETCHED', () => {
    it('should handle EVENT_LIST_FETCHED', () => {
      const eventsList = [{ name: 'event1', id: 'p1' }, { name: 'event2', id: 'p2' }, { name: 'event2', id: 'p2' }]
      const firstState = { ...INITIAL_STATE, list: eventsList }
      eventsReducer(undefined, { type: 'EVENT_LIST_FETCHED', data: eventsList }).should.deep.equal(firstState)
      const events2 = [{ name: 'p4' }]
      const updatedState2 = { ...firstState, list: events2 }
      eventsReducer(firstState, { type: 'EVENT_LIST_FETCHED', data: events2 }).should.deep.equal(updatedState2)
    })

    it('should handle ERROR', () => {
      const error = 'fetch error'
      const updatedState = { ...INITIAL_STATE, error }
      eventsReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })

  describe('EVENT_CREATED', () => {
    it('should handle EVENT_CREATED', () => {
      const initialEventsList = [
        { name: 'event1', id: 'p1' },
        { name: 'event2', id: 'p2' },
        { name: 'event2', id: 'p3' }
      ]
      const firstState = { ...INITIAL_STATE, list: initialEventsList }
      const newEvent = { name: 'New Event', id: 'new event123' }
      const updatedEventsList = [...initialEventsList, newEvent]
      const updatedState = { ...firstState, list: updatedEventsList }

      eventsReducer(firstState, { type: 'EVENT_CREATED', data: newEvent }).should.deep.equal(updatedState)
    })

    it('should handle ERROR', () => {
      const error = 'create error'
      const updatedState = { ...INITIAL_STATE, error }
      eventsReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })

  describe('EVENT_REMOVED', () => {
    it('should handle EVENT_REMOVED', () => {
      const initialEventsList = [
        { name: 'event1', id: 'p1' },
        { name: 'event2', id: 'p2' },
        { name: 'event2', id: 'p3' }
      ]
      const firstState = { ...INITIAL_STATE, list: initialEventsList }
      const updatedEventsList = initialEventsList.slice(0, 2)
      const updatedState = { ...firstState, list: updatedEventsList }
      eventsReducer(firstState, { type: 'EVENT_REMOVED', data: { id: 'p3' } }).should.deep.equal(updatedState)
    })

    it('should handle ERROR', () => {
      const error = 'delete error'
      const updatedState = { ...INITIAL_STATE, error }
      eventsReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })

  describe('EVENT_FETCHED', () => {
    it('should handle EVENT_FETCHED', () => {
      const current = { name: 'event1', id: 'p1' }
      const updatedState = { ...INITIAL_STATE, current }
      eventsReducer(INITIAL_STATE, { type: 'EVENT_FETCHED', data: current }).should.deep.equal(updatedState)
    })

    it('should handle ERROR', () => {
      const error = 'get current error'
      const updatedState = { ...INITIAL_STATE, error }
      eventsReducer(undefined, { type: 'ERROR', error }).should.deep.equal(updatedState)
    })
  })

  describe('EVENT_UPDATED', () => {
    it('should handle EVENT_UPDATED', () => {
      const current = { name: 'event1', id: 'p1' }
      const updatedState = { ...INITIAL_STATE, current }
      eventsReducer(INITIAL_STATE, {
        type: 'EVENT_UPDATED',
        data: current
      }).should.deep.equal(updatedState)
    })

    it('should handle ERROR', () => {
      const error = 'update error'
      const updatedState = { ...INITIAL_STATE, error }
      eventsReducer(undefined, {
        type: 'ERROR',
        error
      }).should.deep.equal(updatedState)
    })
  })
})
