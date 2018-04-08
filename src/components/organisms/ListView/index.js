import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List } from 'material-ui/List'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Item from '../../molecules/Item'

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
    const { storeList, dispatch } = this.props
    for (i = 'B'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      const letter = String.fromCharCode(i)
      if (!storeList[letter]) {
        return this.props.action.listForLetter(dispatch, letter)
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
    // Render only the items that are in the viewport by adding them to an array
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
          items.push(<Item type={this.props.type} key={index} style={{ height: rowHeight }} item={list[index]} />)
        } else {
          break
        }
        index++
      }
    }
    // Lazy load the next set of items
    const { loading, match } = this.props
    console.log(match)
    if (list.length - endIndex < 100 && !loading) {
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

          <List>{items}</List>
          {this.props.children}
        </div>
      </div>
    )
  }
}

ListView.propTypes = {
  rowHeight: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  storeList: state[ownProps.type].list
})
export default withRouter(connect(mapStateToProps)(ListView))
