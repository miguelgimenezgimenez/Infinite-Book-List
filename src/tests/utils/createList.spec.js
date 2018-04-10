/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import chai from 'chai'
import { createList } from '../../../utils/createList'

chai.should()

describe.only('Channel Actions', () => {
  describe('createList', () => {
    it('generates a complete list from given input', () => {
      const store = { A: [1, 2], B: [3, 4] }
      createList(store).should.deep.equal([1, 2, 3, 4])
    })
  })
})
