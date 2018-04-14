import React from 'react'
import { expect } from 'chai'
// import sinon from 'sinon'
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Adapter from 'enzyme-adapter-react-16'
import Item from '../../components/molecules/Item'

Enzyme.configure({ adapter: new Adapter() })

const book = {
  title: 'Pillars of the Earth',
  author: 'Ken_Follet',
  year: '1998',
  genre: 'History'
}
const author = {
  name: 'J_K_Rowling',
  gender: 'female'
}

describe('<Item />', () => {
  it('Gives the correct props to the ListItemComponent when rendering a  book', () => {
    // eslint-disable-next-line
    const wrapper = mount(
      <MuiThemeProvider>
        <BrowserRouter>
          <Item
            type="book"
            item={book}
          />
        </BrowserRouter>
      </MuiThemeProvider>)

    expect(wrapper.find('ListItem').props().primaryText).to.equal('Pillars of the Earth')
    const expectedString = `Ken Follet\n        - Genre: HISTORY\n        - Date: 1998`
    expect(wrapper.find('ListItem').props().secondaryText).to.equal(expectedString)
  })
  it('Gives the correct props to the ListItemComponent rendering author', () => {
    // eslint-disable-next-line
    const wrapper = mount(
      <MuiThemeProvider>
        <BrowserRouter>
          <Item
            type="author"
            item={author}
          />
        </BrowserRouter>
      </MuiThemeProvider>)

    expect(wrapper.find('ListItem').props().primaryText).to.equal('J K Rowling')
    expect(wrapper.find('ListItem').props().secondaryText).to.equal('female')
  })
})
