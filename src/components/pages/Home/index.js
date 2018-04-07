import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListView from '../../organisms/ListView/index'
import * as bookActions from '../../../actions/book'

const getBookList = (bookList) => {
  let i
  let list = []
  for (i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    const letter = String.fromCharCode(i)
    if (bookList[letter]) list = list.concat(bookList[letter])
    else return list
  }
  return list
}

class Home extends Component {
  componentDidMount () {
    bookActions.listForLetter(this.props.dispatch, 'A')
  }

  render () {
    const list = getBookList(this.props.list)
    return (
      <div >
        {list.length > 0 &&
        <ListView list={list} rowHeight={30} />
        }
      </div>)
  }
}

const mapStateToProps = state => ({
  list: state.book.list
})
export default connect(mapStateToProps)(Home)
