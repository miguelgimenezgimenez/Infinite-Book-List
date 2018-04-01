import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Book from '../../organisms/Book'

export default class Home extends Component {
  render () {
    return (
      <div className="list">
        {/* <LazyLoad height={200}>
          <Book letter="A" />
        </LazyLoad>
        <LazyLoad height={200} once >
          <Book letter="B" />
        </LazyLoad>
        <LazyLoad height={200} offset={100}>
          <Book letter="B" />

        </LazyLoad>
        <LazyLoad /> */}
      </div>)
  }
}
