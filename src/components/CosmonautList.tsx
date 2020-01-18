import React from 'react'
import CosmonautElement from './CosmonautElement'

const CosmonautList: React.FC = () => {
  return (
    <div className="cosmonaut-list">
      <div className="list scrollbar">
        <CosmonautElement />
        <CosmonautElement />
        <CosmonautElement />
        <CosmonautElement />
        <CosmonautElement />
        <CosmonautElement />
      </div>
      <span className="total">Total amount: 6 people on ISS</span>
    </div>
  )
}

export default CosmonautList
