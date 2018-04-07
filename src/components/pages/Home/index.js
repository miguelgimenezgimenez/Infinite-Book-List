import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'
import Book from '../../organisms/Book'
import ListView from '../../organisms/ListView/index'

const getBookList = (bookList) => {
  let i
  let list = []
  for (i = 'A'.charCodeAt(0); i < 'Z'.charCodeAt(0); i++) {
    const letter = String.fromCharCode(i)
    if (bookList) {
      if (bookList[letter]) list = list.concat(bookList[letter])
      else return list
    } else {
      list.push(letter)
    }
  }
  return list
}

class Home extends Component {
  componentDidMount () {
  }

  render () {
    const list = getBookList(this.props.list)
    return (
      <div >
        {list.length > 0 &&
        <ListView list={list} rowHeight={30} >
          {}
        </ListView>
        }

      </div>)
  }
}

const mapStateToProps = state => ({
  list: state.book.list
})
export default connect(mapStateToProps)(Home)
