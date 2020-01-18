import React, { Component } from 'react'

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h3 className="label">ISS is now located at:</h3>
        <span className="location-info">
          longitude: 50.12334, latitude: -41.534
        </span>
      </div>
    )
  }
}

export default Location
