import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import Book from '../../organisms/Book'
import ListView from '../../organisms/ListView/index'

export default class Home extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <div >
        <ListView rowHeight={30} />
        <LazyLoad height={2800} offset={100} >
          <Book letter="A" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100} >
          <Book letter="B" />
        </LazyLoad>
        <LazyLoad height={2800} offset={100}>
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
        </LazyLoad>
      </div>)
  }
}
