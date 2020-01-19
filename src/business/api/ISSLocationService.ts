interface ISSPosition {
  latitude: number
  longitude: number
}

export default class ISSLocationService {
  async getISSLocation(): Promise<google.maps.LatLng> {
    const URL = 'https://api.wheretheiss.at/v1/satellites/25544'

    const data = await fetch(URL)
    const location: ISSPosition = await data.json()

    const { latitude, longitude } = location

    return new google.maps.LatLng(+latitude.toFixed(5), +longitude.toFixed(5))
  }
}
