
import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import style from './style.scss'

const defaultDate = new Date()
defaultDate.setFullYear(defaultDate.getFullYear() - 100)

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
    this.setState({ [key]: date.getFullYear() })
  }

  setFilter (startDate, endDate) {
    this.props.setFilter(list => list.filter(item => item.year >= startDate && item.year <= endDate))
  }

  render () {
    const { startDate, endDate } = this.state
    return (
      <div className={style.container}>
        <DatePicker
          onChange={(e, date) => { this.setDate(e, date, 'startDate') }}
          hintText="From Date"
          openToYearSelection
        />
        <DatePicker
          onChange={(e, date) => { this.setDate(e, date, 'endDate') }}
          hintText="To Date"
          openToYearSelection
        />

        <RaisedButton
          style={{ height: 40, marginLeft: 30 }}
          disabled={!startDate || !endDate}
          secondary
          label="Filter"
          onClick={() => this.setFilter(startDate, endDate)}
        />

        <RaisedButton
          style={{ height: 40, marginLeft: 30 }}
          secondary
          label="Clear"
          onClick={() => this.clearFilter()}
        />
      </div>
    )
  }
}
