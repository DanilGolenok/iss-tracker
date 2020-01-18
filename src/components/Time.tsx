import React, { useState, useEffect } from 'react'
import moment from 'moment'

const Time: React.FC = () => {
  const [date, setDate] = useState<moment.Moment>(moment().utc())

  useEffect(() => updateDate(), [])

  const updateDate = () => {
    setDate(moment().utc())
  }

  return (
    <div className="time">
      <h3 className="utc-time">Current UTC time: {date.format('h:mm:ss A')}</h3>
      <span className="date">{date.format('dddd, D MMM YYYY')}</span>
    </div>
  )
}

export default Time
