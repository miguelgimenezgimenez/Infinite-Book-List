import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import RainbowListDelegate from './RainbowListDelegate'
import { connect } from 'react-redux'

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
    console.log(numRows, 'numrows')
    console.log(totalHeight, 'totalheight')
    console.log(rowHeight)
    const startIndex = Math.min(Math.floor(scrollTop / rowHeight), list.length - 1)
    const endIndex = Math.min(startIndex + Math.ceil(availableHeight / rowHeight), list.length)

    const items = []

    let index = startIndex
    if (this.props.list.length) {
      while (index < endIndex) {
        if (this.props.list[index]) {
          items.push(<li key={index}>
            <div
              style={{
                height: rowHeight,
                padding: '50px 10px',
                fontSize: 24
              }}
            >
              {this.props.list[index].title}
            </div>
                     </li>)
        } else {
          console.log('breeeak')
          break
        }
        index++
      }
    }
    return (
      <div
        onScroll={e => this.handleScroll(e)}
        style={{ height: '100vh', overflowY: 'scroll' }}
        ref={node => (this.node = node)}
      >
        <div
          style={{
            height: totalHeight,
            paddingTop: startIndex * rowHeight
          }}
        >
          <ol>{items}</ol>
        </div>
      </div>
    )
  }
}

ListView.propTypes = {
  rowHeight: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  list: state.book.list
})
export default connect(mapStateToProps)(ListView)
