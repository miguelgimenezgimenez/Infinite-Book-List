import React, { Component } from 'react'

export default class Book extends Component {
  render () {
    const { item } = this.props
    return (
      <div>
        {item.title}
      </div>)
  }
}
