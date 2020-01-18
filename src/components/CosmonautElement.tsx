import React from 'react'
import Cosmonaut from '../business/models/Cosmonaut'

interface Props {
  cosmonaut: Cosmonaut
}

const CosmonautElement: React.FC<Props> = ({ cosmonaut }) => {
  const { name, title, photo, flag, daysInSpace } = cosmonaut

  return (
    <div className="cosmonaut">
      <div className="bio">
        <div className="photo">
          <img src={photo} alt="photo" />
        </div>
        <div className="person-info">
          <span className="name">{name}</span>
          <img src={flag} alt="flag" className="flag" />
          <span className="title">{title}</span>
        </div>
      </div>
      <div className="launch-info">
        <div className="duration">{daysInSpace}</div>
        <span className="label">Days in space</span>
      </div>
    </div>
  )
}

export default CosmonautElement
