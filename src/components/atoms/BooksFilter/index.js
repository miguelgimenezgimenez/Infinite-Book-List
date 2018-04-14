
import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import style from './style.scss'

export default class BooksFilter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      active: false
    }
  }

  clearFilter (type) {
    this.setState({ startDate: null, endDate: null, active: false })
    this.props.setFilter(null)
  }

  setDate (e, date, key) {
    this.setState({ [key]: date.getFullYear() })
  }

  setDateFilter (startDate, endDate) {
    this.props.setFilter(list => list.filter(item => item.year >= startDate && item.year <= endDate))
    this.setState({ active: true })
  }

  setHalloweenFilter () {
    this.props.setFilter(list => list.filter(item =>
      item.genre === 'horror' &&
      String(item.publishedAt).match(/10-31/)))
    this.setState({ active: true })
  }

  render () {
    const { startDate, endDate } = this.state
    return (
      <div>
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
          <div>
            <RaisedButton
              style={{ height: 40, marginLeft: 30 }}
              disabled={!startDate || !endDate}
              primary
              label="Date Filter"
              onClick={() => this.setDateFilter(startDate, endDate)}
            />

            {!this.props.query && <RaisedButton
              style={{ height: 40, marginLeft: 30 }}
              primary
              color="black"
              label="Horror Books Published on Halloween"
              onClick={() => this.setHalloweenFilter()}
            />}

            <RaisedButton
              style={{ height: 40, marginLeft: 60 }}
              secondary
              disabled={!this.state.active}
              label="Clear Filters"
              onClick={() => this.clearFilter()}
            />

          </div>
        </div>
      </div>
    )
  }
}
