
import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'

export default class DateFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null
    }
  }

  clearFilter () {
    this.setState({ startDate: null, endDate: null })
    this.props.setFilter(null)
  }

  setDate (e, date, key) {
    this.setState({ [key]: date })
  }

  setFilter (startDate, endDate) {
    this.props.setFilter(list => list.filter(item => item.publishedAt > startDate && item.publishedAt < endDate))
  }

  render () {
    const { startDate, endDate } = this.state

    return (
      <div>
        <DatePicker
          onChange={(e, date) => { this.setDate(e, date, 'startDate') }}
          hintText="From Date"
          mode="landscape"
        />
        <DatePicker
          onChange={(e, date) => { this.setDate(e, date, 'endDate') }}
          hintText="To Date"
          mode="landscape"
        />

        <RaisedButton
          disabled={!startDate || !endDate}
          secondary
          label="Filter"
          onClick={() => this.setFilter(startDate, endDate)}
        />

        <RaisedButton
          secondary
          label="Clear Filter"
          onClick={() => this.clearFilter()}
        />
      </div>
    )
  }
}
