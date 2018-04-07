import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LazyLoad } from 'react-lazyload'
import * as bookActions from '../../../actions/book'
import { lazyload } from 'react-lazyload'

@lazyload({
  height: 200,
  offset: 100
})

class NextLetterComponent extends Component {
  componentDidMount () {
    if (this.props.letter.match(/[A-Z]/)) {
      bookActions.listForLetter(this.props.dispatch, this.props.letter)
    }
  }

  render () {
    const { letter } = this.props
    const charCode = letter.charCodeAt(0)

    return (
      <div ref={node => (this.node = node)} >
        {this.props.list[letter]
          ? <NextLetterComponent list={this.props.list} letter={String.fromCharCode(charCode + 1)} dispatch={this.props.dispatch} />

          : 'Loading...'}
      </div>
    )
  }
}

export default NextLetterComponent
