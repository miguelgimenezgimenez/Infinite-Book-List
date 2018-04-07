import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyLoad from 'react-lazyload'
import Book from '../../organisms/Book'
import ListView from '../../organisms/ListView/index'

class Home extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div >
        {this.props.list.A && <ListView letter="A" rowHeight={30} />}
        {/* {this.props.list.B && <ListView letter="B" rowHeight={30} />} */}
        {/* <Book letter="A" /> */}
        <LazyLoad height={28000} offset={1000} >
          <Book letter="A" />
        </LazyLoad>
        {/* <LazyLoad height={2800} offset={100} >
          <Book letter="B" />
        </LazyLoad> */}
        {/* <LazyLoad height={2800} offset={100}>
          <Book letter="C" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
          <Book letter="D" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
          <Book letter="E" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
          <Book letter="F" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
          <Book letter="G" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
          <Book letter="H" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
          <Book letter="I" />
        </LazyLoad> */}
      </div>)
  }
}

const mapStateToProps = state => ({
  list: state.book.list
})
export default connect(mapStateToProps)(Home)
