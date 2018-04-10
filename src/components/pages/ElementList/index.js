import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ListPage from '../ListPage'

class SelectedElementPage extends Component {
  render () {
    const { url } = this.props.match
    let [, type, name] = url.split('/')
    name = name.replace(/_/i, ' ').toUpperCase()
    type = type.toUpperCase()
    return (
      <div >
        <h3>{`${type}: ${name}`}</h3>
        <ListPage {...this.props} />

      </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state[ownProps.type].list,
  loading: state[ownProps.type].loading

})
export default withRouter(connect(mapStateToProps)(SelectedElementPage))
