import React from 'react'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Adapter from 'enzyme-adapter-react-16'
import ListView from '../../components/molecules/ListView/index'
import createStore from '../../store'
import * as bookActions from '../../actions/book'

Enzyme.configure({ adapter: new Adapter() })

chai.use(sinonChai)
const sandbox = sinon.createSandbox()

const store = createStore({})

const callback = sinon.stub()

describe('<ListView />', () => {
  sandbox.stub(bookActions, 'listForLetter')

  const mockArray = new Array(1000)
  it('Gives the correct props to the  when rendering a  book', () => {
    // eslint-disable-next-line
    const wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <ListView

              type="book"
              rowHeight={30}
              list={[]}
              action={bookActions.listForLetter}
              isBeingFiltered
              loading={false}
            />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider >)

    sinon.assert.calledOnce(bookActions.listForLetter)
    // console.log(mockAction.x, mockAction.y, '--------------------------')
  })
})
