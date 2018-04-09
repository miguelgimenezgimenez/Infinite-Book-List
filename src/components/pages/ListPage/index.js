import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { BarLoader } from 'react-css-loaders'
import ListView from '../../organisms/ListView'

import { createList } from '../../../../utils/createList'

class ListPage extends Component {
  componentDidMount () {
    const query = this.props.match.params.query || 'A'
    console.log(this.props)
    this.props.action(this.props.dispatch, query)
  }

  componentDidUpdate (prevProps) {
    const { query } = this.props.match.params
    if (query !== prevProps.match.params.query) {
      this.props.action(this.props.dispatch, query)
    }
  }

  render () {
    const { list, type, action } = this.props
    let aggregatedList = createList(list)
    const { query } = this.props.match.params
    if (query) {
      aggregatedList = list[query] || []
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
