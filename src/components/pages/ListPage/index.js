import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { BarLoader } from 'react-css-loaders'
import ListView from '../../organisms/ListView'

import { createList } from '../../../../utils/createList'
import FilterComponent from '../../atoms/FilterComponent/index'

class ListPage extends Component {
  componentDidMount () {
    const query = this.props.match.params.query || 'A'
    this.props.action(this.props.dispatch, query)
  }

  componentDidUpdate (prevProps) {
    const { query } = this.props.match.params
    if (query !== prevProps.match.params.query) {
      this.props.action(this.props.dispatch, query)
    }
  }

  render () {
    const { list } = this.props
    let aggregatedList = createList(list)
    const { query } = this.props.match.params
    if (query) {
      aggregatedList = list[query] || []
    }

    return (
      <div >
        <FilterComponent aggregatedList={aggregatedList} {...this.props} />
        { this.props.loading && <BarLoader color="blue" />}
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state[ownProps.type].list,
  loading: state[ownProps.type].loading

})
export default withRouter(connect(mapStateToProps)(ListPage))
