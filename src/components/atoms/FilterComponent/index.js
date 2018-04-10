
import React, { Component } from 'react'
import ListView from '../../organisms/ListView'
import Checkbox from 'material-ui/Checkbox'

export default class FilterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false
    }
  }

  isActive () {
    return this.state.active
  }

  render () {
    const { aggregatedList, type, action } = this.props

    return (
      <div>
        <Checkbox
          label="Simple with controlled value"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        {aggregatedList.length > 0 &&
        <ListView list={aggregatedList} type={type} action={action} rowHeight={30} />}

      </div>
    )
  }
}
