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
        return this.props.action(dispatch, letter)
      }
    }
    // when is being filtered scroll to top on end of search so results are visible
    if (this.props.isBeingFiltered) this.node.scrollTop = 0
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

    // Render only the items that are in the viewport by adding them to an array
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
    // if its being filtered the conditions to lazy load are different
    const shouldLazyLoad = this.props.isBeingFiltered || list.length
    const { loading, match } = this.props
    // Lazy load the next set of items
    if (shouldLazyLoad && (list.length - endIndex) < 100 && !loading && !match.params.query) {
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
        </div>
        {(!loading && !items.length) && <h1>No Matches </h1>}
      </div>
    )
  }
}

ListView.propTypes = {
  rowHeight: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  storeList: state[ownProps.type].list,
  loading: state[ownProps.type].loading

})
export default withRouter(connect(mapStateToProps)(ListView))
