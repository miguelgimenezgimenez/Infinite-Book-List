import React from 'react'
import { expect } from 'chai'
// import sinon from 'sinon'
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Adapter from 'enzyme-adapter-react-16'
import Item from '../../components/atoms/Item'

Enzyme.configure({ adapter: new Adapter() })
const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: '#001B1F'
  }

})
const book = {
  title: 'Pillars of the Earth',
  author: 'Ken_Follet',
  year: '1998',
  genre: 'History'
}
describe('<Item />', () => {
  it('renders three <Item /> components', () => {
    const wrapper = mount(<MuiThemeProvider>
      <BrowserRouter>
        <Item
          type="book"
          item={book}
        />
      </BrowserRouter>
    </MuiThemeProvider>)

    expect(wrapper.find('ListItem').props().primaryText).to.equal('Pillars of the Earth')
    expect(wrapper.find('ListItem').props().secondaryText).to.equal('Ken Follet - Genre: HISTORY - Date: 1998')
  })
})
