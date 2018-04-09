import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'
import { NavLink, withRouter } from 'react-router-dom'

class Item extends Component {
  handleClick (e) {
    const { type } = this.props
    this.props.history.push(`/${type}/${e}`)
  }

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
        onClick={() => this.handleClick(item.name)}
        primaryText={primaryText}
        secondaryText={secondaryText}
      />
    )
  }
}
export default withRouter(Item)
