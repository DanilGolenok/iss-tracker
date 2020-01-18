import React from 'react'
import Cosmonaut from './Cosmonaut'

const CosmonautList: React.FC = () => {
  return (
    <div className="cosmonaut-list">
      <div className="list scrollbar">
        <Cosmonaut />
        <Cosmonaut />
        <Cosmonaut />
        <Cosmonaut />
        <Cosmonaut />
        <Cosmonaut />
      </div>
      <span className="total">Total amount: 6 people on ISS</span>
    </div>
  )
}

export default CosmonautList
