import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { BarLoader } from 'react-css-loaders'
import ListView from '../../molecules/ListView'
import AuthorsFilter from '../../atoms/AuthorsFilter'
import BooksFilter from '../../atoms/BooksFilter'
import style from './style.scss'

import { createList } from '../../../../utils/createList'

class ListPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      filterFn: null
    }
  }

  componentDidMount () {
    const query = this.props.match.params.query || 'A'
    this.props.action(this.props.dispatch, query)
  }

  componentDidUpdate (prevProps) {
    const { query } = this.props.match.params
    if (query !== prevProps.match.params.query && !this.props.list[query]) {
      this.props.action(this.props.dispatch, query)
    }
  }

  setFilter (filterFn) {
    this.setState({ filterFn })
  }

  render () {
    const { list, type, action } = this.props

    // Generate Complete List
    let aggregatedList = createList(list)

    // if query parameters get only items for query
    const { query } = this.props.match.params
    if (query) {
      aggregatedList = list[query] || []
    }

    // if filter filter list
    const { filterFn } = this.state
    if (filterFn) {
      aggregatedList = filterFn(aggregatedList)
    }

    // Get titles for List Page
    const { url } = this.props.match
    let [, route, name] = url.split('/')
    name ? name = `: ${name.replace(/_/g, ' ').toUpperCase()}` : name = ''
    route = route.toUpperCase()
    return (
      <div >
        <h3>{`${route}   ${name}`}</h3>

        {type === 'author' &&
        <div>
          <AuthorsFilter setFilter={filterFunction => this.setFilter(filterFunction)} />
        </div>
        }

        {type === 'book' &&
        <div className={style.filterContainer}>
          <BooksFilter
            query={query}
            className={style.BooksFilter}
            setFilter={filterFunction => this.setFilter(filterFunction)}
          />
        </div>
        }

        <ListView list={aggregatedList} type={type} action={action} rowHeight={30} isBeingFiltered={!!filterFn} />
        {this.props.loading &&
          <BarLoader className={style.loader} color="#EC5281" size={22} />
        }
      </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state[ownProps.type].list,
  loading: state[ownProps.type].loading

})
export default withRouter(connect(mapStateToProps)(ListPage))
