import React, { Component } from 'react'
import ISSLocationService from '../business/api/ISSLocationService'
import Interval from '../business/models/Interval'

type State = {
  issLocation: google.maps.LatLng | null
}

class Location extends Component {
  private issLocationService: ISSLocationService
  readonly state: State

  constructor(props: any) {
    super(props)

    this.issLocationService = new ISSLocationService()
    this.state = { issLocation: null }
    this.updateISSLocation()
  }

  componentDidMount() {
    this.updateISSLocation()
    Interval.subscribe(() => this.updateISSLocation())
  }

  async updateISSLocation() {
    const issLocation = await this.issLocationService.getISSLocation()
    this.setState({ issLocation })
  }

  render() {
    return (
      <div className="location">
        <h3 className="label">ISS is now located at:</h3>
        <div className="location-info">
          <div className="long">
            <span>longitude:</span>
            <span>{this.state.issLocation?.lng()}</span>
          </div>
          <div className="lat">
            <span>latitude:</span>
            <span>{this.state.issLocation?.lat()}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Location
