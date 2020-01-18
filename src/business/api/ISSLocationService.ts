interface ISSPosition {
  iss_position: {
    latitude: number
    longitude: number
  }
}

export default class ISSLocationService {
  async getISSLocation(): Promise<google.maps.LatLng> {
    const URL = 'http://api.open-notify.org/iss-now.json'

    const data = await fetch(URL)
    const location: ISSPosition = await data.json()

    const { latitude, longitude } = location.iss_position

    return new google.maps.LatLng(latitude, longitude)
  }
}
