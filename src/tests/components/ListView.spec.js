import React from 'react'
import chai from 'chai'
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

describe('<ListView />', () => {
  afterEach(() => {
    sandbox.restore()
  })
  it('Gets next elements when filter is active', () => {
    sandbox.stub(bookActions, 'listForLetter')
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
            />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider >)

    sinon.assert.calledTwice(bookActions.listForLetter)
  })
  it('Gets doesnt get next elements when filter is inactive', () => {
    sandbox.stub(bookActions, 'listForLetter')
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
              isBeingFiltered={false}
            />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider >)

    sinon.assert.notCalled(bookActions.listForLetter)
  })

  it('Gets next elements when there is less than 100 elements left in the list', () => {
    sandbox.stub(bookActions, 'listForLetter')
    // eslint-disable-next-line
    const wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <ListView
              type="book"
              rowHeight={30}
              list={new Array(90)}
              action={bookActions.listForLetter}
              loading={false}
            />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider >)
    // when
    sinon.assert.calledTwice(bookActions.listForLetter)
  })

  it('Doesnt get next elements when there is more than 100 elements left in the list', () => {
    sandbox.stub(bookActions, 'listForLetter')
    // eslint-disable-next-line
    const wrapper = mount(
      <Provider store={store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <ListView
              type="book"
              rowHeight={30}
              list={new Array(100)}
              action={bookActions.listForLetter}
              loading={false}
            />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider >)
    // when
    sinon.assert.notCalled(bookActions.listForLetter)
  })
})
