import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as bookActions from '../../../actions/book'

class Book extends Component {
  componentDidMount () {
    bookActions.listForLetter(this.props.dispatch, this.props.letter)
  }

  render () {
    return (
      <div />
    )
  }
}

const mapStateToProps = state => ({
  list: state.book.list
})
export default connect(mapStateToProps)(Book)
