import React, { useState, useEffect } from 'react'
import ISSLocationService from '../business/api/ISSLocationService'

const Location = () => {
  const issLocationService = new ISSLocationService()
  const [issLocation, setISSLocation] = useState<google.maps.LatLng>()

  useEffect(() => updateISSLocation(), [])

  const updateISSLocation = () => {
    issLocationService.getISSLocation().then(setISSLocation)
  }

  return (
    <div className="location">
      <h3 className="label">ISS is now located at:</h3>
      <div className="location-info">
        <div className="long">
          <span>longitude:</span>
          <span>{issLocation?.lng()}</span>
        </div>
        <div className="lat">
          <span>latitude:</span>
          <span>{issLocation?.lat()}</span>
        </div>
      </div>
    </div>
  )
}

export default Location
