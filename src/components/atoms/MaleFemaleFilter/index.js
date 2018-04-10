import React, { Component } from 'react'
import Checkbox from 'material-ui/Checkbox'
import style from './style.scss'

export default class FilterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      male: false,
      female: false
    }
  }

  updateCheck (gender) {
    // deactivate the other checkbo
    const otherGender = gender === 'male' ? 'female' : 'male'
    if (!this.state[gender] && this.state[otherGender]) {
      this.props.setFilter(list =>
        list.filter(item => item.gender ===
          gender))
      return this.setState({ [gender]: true, [otherGender]: false })
    }
    // check if both checkboxes are deactivated or just one
    this.state.gender ? this.props.setFilter(null)
      : this.props.setFilter(list =>
        list.filter(item => item.gender ===
          gender))
    return this.setState({ [gender]: !this.state.gender })
  }

  render () {
    return (

      <div className={style.container}>
        <div className={style.filter}>
          <Checkbox
            label="Male"
            checked={this.state.male}
            onCheck={() => this.updateCheck('male')}
          />
          <Checkbox
            label="Female"
            checked={this.state.female}
            onCheck={() => this.updateCheck('female')}
          />
        </div>
      </div>
    )
  }
}
