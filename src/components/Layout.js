import React, { Component } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { withRouter } from 'react-router-dom'

import Navbar from './organisms/Navbar'

import './GlobalStyles.scss'

const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: '#001B1F'
  }

})
class Layout extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar />
          <div >{this.props.children}</div>
        </div>
      </MuiThemeProvider>)
  }
}

export default withRouter(Layout)
