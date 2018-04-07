import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import RainbowListDelegate from './RainbowListDelegate'
import { connect } from 'react-redux'
import { LazyLoad } from 'react-lazyload'

class ListView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      availableHeight: 0,
      scrollTop: 0,
      maxHeight: this.props.list.length * this.props.rowHeight
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
      scrollTop: Math.min(event.target.scrollTop, this.state.maxHeight)
    })
  }

  render () {
    const { availableHeight, scrollTop } = this.state
    const { list, rowHeight } = this.props
    if (!list) {
      return (<div
        onScroll={e => this.handleScroll(e)}
        style={{ height: '100vh', overflowY: 'scroll' }}
        ref={node => (this.node = node)}
      />)
    }

    const numRows = list.length
    const totalHeight = rowHeight * numRows
    const startIndex = Math.floor(scrollTop / rowHeight)
    const endIndex = startIndex + Math.ceil(availableHeight / rowHeight)
    const items = []
    console.log(list.length)
    let index = startIndex
    if (list.length) {
      while (index < endIndex) {
        if (list[index]) {
          items.push(<li key={index}>
            <div
              style={{
                height: rowHeight,
                padding: '5px 10px',
                fontSize: 24
              }}
            >
              {`${index} ${list[index].title}`}
            </div>
          </li>)
        } else {
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
            height: totalHeight - (startIndex * rowHeight),
            paddingTop: startIndex * rowHeight
          }}
        >
          <ul>{items}</ul>

        </div>
      </div>
    )
  }
}

ListView.propTypes = {
  rowHeight: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  list: state.book.list[ownProps.letter]
})
export default connect(mapStateToProps)(ListView)
