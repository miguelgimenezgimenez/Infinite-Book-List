import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Item from '../../components/atoms/Item'

Enzyme.configure({ adapter: new Adapter() })

describe('<Item />', () => {
  it('renders three <Item /> components', () => {
    const wrapper = shallow(<Item />)
    // expect(wrapper.find(Foo)).to.have.length(3)
  })
})
