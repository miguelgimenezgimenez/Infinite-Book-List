import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import * as bookActions from '../../../actions/book'

class NextLetterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollTop: 0
      // maxHeight: this.props.list.length * this.props.rowHeight
    }
  }

  componentDidMount () {
    if (this.props.letter.match(/[A-Z]/)) {
      bookActions.listForLetter(this.props.dispatch, this.props.letter)
    }
  }

  loader () {
    const { letter } = this.props
    if (letter === 'Z') return null
    return 'LOADING'
  }

  handleScroll (event) {
    this.setState({
      scrollTop: event.target.scrollTop
    })
  }

  render () {
    const { letter } = this.props
    const charCode = letter.charCodeAt(0)

    return (
      <div ref={node => (this.node = node)} >
        {this.props.list[letter]
          ? <NextLetterComponent list={this.props.list} letter={String.fromCharCode(charCode + 1)} dispatch={this.props.dispatch} />

          : this.loader()}
      </div>
    )
  }
}

export default NextLetterComponent
