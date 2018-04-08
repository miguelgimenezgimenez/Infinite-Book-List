import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { BarLoader } from 'react-css-loaders'
import ListView from '../../organisms/ListView'

import { createList } from '../../../../utils/createList'

class ListPage extends Component {
  componentDidMount () {
    const letter = this.props.match.params.letter || 'A'
    console.log(letter)
    this.props.action.listForLetter(this.props.dispatch, letter)
  }

  componentDidUpdate (prevProps) {
    const { letter } = this.props.match.params
    if (letter !== prevProps.match.params.letter) {
      this.props.action.listForLetter(this.props.dispatch, letter)
    }
  }

  render () {
    const { list, type, action } = this.props
    let aggregatedList = createList(list)
    const { letter } = this.props.match.params
    if (letter) {
      aggregatedList = list[letter] || []
    }
    return (
      <div >
        {aggregatedList.length > 0 &&
        <ListView list={aggregatedList} type={type} action={action} rowHeight={30} />}

        { this.props.loading && <BarLoader color="blue" />}

      </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state[ownProps.type].list,
  loading: state[ownProps.type].loading

})
export default withRouter(connect(mapStateToProps)(ListPage))
