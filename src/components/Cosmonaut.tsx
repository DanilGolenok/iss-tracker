import React from 'react'

const Cosmonaut: React.FC = () => {
  return (
    <div className="cosmonaut">
      <div className="bio">
        <div className="photo">
          <img
            src="http://www.howmanypeopleareinspacerightnow.com/app/biophotos/alexander-skvortsov.jpg"
            alt="photo"
          />
        </div>
        <div className="person-info">
          <span className="name">Alexander Skvortsov</span>
          <img
            src="http://www.howmanypeopleareinspacerightnow.com/app/flags/flag-russia.jpg"
            alt="flag"
            className="flag"
          />
          <span className="title">Flight Engineer</span>
        </div>
      </div>
      <div className="launch-info">
        <div className="duration">182</div>
        <span className="label">Days in space</span>
      </div>
    </div>
  )
}

export default Cosmonaut
