import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'
import { withRouter } from 'react-router-dom'

class Item extends Component {
  handleClick (item) {
    const { type } = this.props
    this.props.history.push(`/${type}/${item}`)
  }

  render () {
    const { item, type } = this.props
    let primaryText
    let secondaryText
    switch (type) {
      case 'book':
        primaryText = `${item.title}`
        secondaryText = `${item.author.replace(/_/g, ' ')} 
        - Genre: ${item.genre.toUpperCase()} 
        - Date: ${item.year || 'unknown'}`
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
        onClick={() => this.handleClick(item.name || item.title)}
        primaryText={primaryText}
        secondaryText={secondaryText}
        secondaryTextLines={2}
      />
    )
  }
}
export default withRouter(Item)
