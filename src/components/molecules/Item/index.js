import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'

export default class Item extends Component {
  render () {
    const { item, type } = this.props

    let primaryText
    let secondaryText
    switch (type) {
      case 'book':
        primaryText = `${item.title}`
        secondaryText = item.author.replace(/_/g, ' ')
        break
      case 'author':
        primaryText = item.name.replace(/_/g, ' ')
        secondaryText = item.gender
        break
      case 'genre':
        primaryText = item.name
        secondaryText = ''
        break

      default:
        break
    }
    return (

      <ListItem
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
    )
  }
}
