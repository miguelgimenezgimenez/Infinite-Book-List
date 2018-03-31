import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './organisms/Navbar'

// import colors from '../utils/colors'
import './Layout.scss'

const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: colors.primary,
//     primary2Color: colors.secondary,
//     textColor: colors.white
//   },
//   appBar: {
//     height: 50
//   }
})

const Layout = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Navbar />
    </div>
  </MuiThemeProvider>
)

export default Layout
