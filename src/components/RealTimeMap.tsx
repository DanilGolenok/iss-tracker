import React, { Component } from 'react'
import ISSLocationService from '../business/api/ISSLocationService'
import Interval from '../business/models/Interval'

class RealTimeMap extends Component {
  private map!: google.maps.Map
  private marker!: google.maps.Marker
  private issLocationService: ISSLocationService

  constructor(props: any) {
    super(props)
    this.issLocationService = new ISSLocationService()
  }

  async componentDidMount() {
    const location = await this.issLocationService.getISSLocation()

    this.initMap(location)
    this.setUpMarker(location)
    Interval.subscribe(() => this.updateMarker())
  }

  initMap(location: google.maps.LatLng) {
    const mapElement: Element = document.getElementById('map') as Element
    const options: google.maps.MapOptions = this.setUpMapOptions(location)

    this.map = new google.maps.Map(mapElement, options)
  }

  setUpMapOptions(location: google.maps.LatLng): google.maps.MapOptions {
    return {
      zoom: 3,
      center: location || new google.maps.LatLng(40.67, -73.94),
      styles: [
        {
          stylers: [
            { hue: '#ff1a00' },
            { invert_lightness: true },
            { saturation: -100 },
            { lightness: 33 },
            { gamma: 0.5 }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#2D333C' }]
        }
      ],
      disableDefaultUI: true
    }
  }

  setUpMarker(location: google.maps.LatLng) {
    const options: google.maps.ReadonlyMarkerOptions = {
      position: location,
      map: this.map,
      title: 'Current ISS Position'
    }

    this.marker = new google.maps.Marker(options)
  }

  async updateMarker() {
    const location = await this.issLocationService.getISSLocation()
    this.marker?.setPosition(location)
  }

  render() {
    return <div id="map"></div>
  }
}

export default RealTimeMap
