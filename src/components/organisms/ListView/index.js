import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as bookActions from '../../../actions/book'

import Book from '../../molecules/Book'

class ListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      availableHeight: 0,
      scrollTop: 0
    }
  }

  componentDidMount () {
    // eslint-disable-next-line
    this.setState({
      availableHeight: this.node.clientHeight
    })
  }

  getNextLetter () {
    let i
    const { books, dispatch, loading } = this.props
    if (loading) return null
    for (i = 'B'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      const letter = String.fromCharCode(i)
      if (!books[letter]) {
        return bookActions.listForLetter(dispatch, letter)
      }
    }
    return null
  }

  handleScroll (event) {
    this.setState({
      scrollTop: event.target.scrollTop
    })
  }

  render () {
    const { availableHeight, scrollTop } = this.state
    const { list, rowHeight } = this.props
    const numRows = list.length
    const totalHeight = rowHeight * numRows
    const startIndex = Math.floor(scrollTop / rowHeight)
    const endIndex = startIndex + Math.ceil(availableHeight / rowHeight)
    const items = []
    let index = startIndex
    if (list.length) {
      while (index < endIndex) {
        if (list[index]) {
          items.push(<Book key={index} item={list[index]} />)
        } else {
          break
        }
        index++
      }
    }
    if (list.length - endIndex < 100) {
      this.getNextLetter()
    }
    return (
      <div
        onScroll={e => this.handleScroll(e)}
        style={{ height: '100vh', overflowY: 'scroll' }}
        ref={node => (this.node = node)}
      >
        <div
          style={{
            height: totalHeight - (startIndex * rowHeight),
            paddingTop: startIndex * rowHeight
          }}
        >
          {items}
          {this.props.children}
        </div>
      </div>
    )
  }
}

ListView.propTypes = {
  rowHeight: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  books: state.book.list,
  loading: state.book.loading
})
export default connect(mapStateToProps)(ListView)
