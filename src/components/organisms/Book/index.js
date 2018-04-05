import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as bookActions from '../../../actions/book'

class Book extends Component {
  componentDidMount () {
    bookActions.listForLetter(this.props.dispatch, this.props.letter)
  }

  render () {
    return (
      <div >
        {/* {this.props.list.map((book, i) => <div key={i} > <p />{book.title}</div>)} */}
        <ol>{this.props.items} </ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.book.list
})
export default connect(mapStateToProps)(Book)
