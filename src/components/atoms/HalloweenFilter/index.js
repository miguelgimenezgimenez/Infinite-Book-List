
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class HalloweenFilter extends Component {
  clearFilter () {
    this.props.setFilter(null)
  }

  setFilter () {
    this.props.setFilter(list => list.filter(item =>
      item.genre === 'horror' &&
      String(item.publishedAt).match(/10-31/)))
  }

  render () {
    return (
      <div>
        <RaisedButton
          style={{ height: 40, marginLeft: 120 }}
          primary
          color="black"
          label="Horror Books Published on Halloween"
          onClick={() => this.setFilter()}
        />
      </div>
    )
  }
}
