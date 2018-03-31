import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'
import { apiCall } from '../../../../utils/api'

class Layout extends Component {
  componentDidMount () {
    apiCall(this.props.dispatch, 'amazon')
  }

  render () {
    return (
      <div >
        <AppBar />
      </div>
    )
  }
}
export default connect()(Layout)
