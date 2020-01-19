import React, { Component } from 'react'
import moment from 'moment'

type State = {
  timeFormat: string
  dateFormat: string
}

class Time extends Component {
  readonly state!: State

  constructor(props: any) {
    super(props)

    this.state = {
      timeFormat: '',
      dateFormat: ''
    }
  }

  componentDidMount() {
    this.updateDate()
    setInterval(() => this.updateDate(), 1000)
  }

  updateDate() {
    const date = moment().utc()
    this.setState({
      timeFormat: date.format('h:mm:ss A'),
      dateFormat: date.format('dddd, D MMM YYYY')
    })
  }

  render() {
    return (
      <div className="time">
        <h3 className="utc-time">Current UTC time: {this.state.timeFormat}</h3>
        <span className="date">{this.state.dateFormat}</span>
      </div>
    )
  }
}

export default Time
