import React, { Component } from 'react'

export class RealTimeMap extends Component {
  private map!: google.maps.Map

  async componentDidMount() {

    this.initMap()
  }

  initMap() {
    const mapElement: Element = document.getElementById('map') as Element
    const options: google.maps.MapOptions = this.setUpMapOptions()

    this.map = new google.maps.Map(mapElement, options)
  }

  setUpMapOptions(): google.maps.MapOptions {
    return {
      zoom: 5,
      center: new google.maps.LatLng(40.67, -73.94), // New York
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

  render() {
    return <div id="map"></div>
  }
}

export default RealTimeMap
