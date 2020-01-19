import Cosmonaut from '../models/Cosmonaut'
import moment from 'moment'
import apiPeopleInSpace from './peopleinspace.json'

interface PersonInSpace {
  name: string
  biophoto: string
  countryflag: string
  launchdate: string
  title: string
  location: string
  biolink: string
}

/**
 * Я пытался получить данные о текущем составе МКС по этому URL:
 * http://www.howmanypeopleareinspacerightnow.com/peopleinspace.json
 *
 * Но получил такую ошибку:
 * Access to fetch at 'https://www.howmanypeopleareinspacerightnow.com/space.json'
 * from origin 'http://localhost:3000' has been blocked by CORS policy:
 * No 'Access-Control-Allow-Origin' header is present on the requested resource.
 *
 * После нескольких часов гуглежа, я понял, что моему домену запрещено посылать
 * запросы по этому URL, а других способов получить полные данные о составе МКС я не нашёл
 * (я не использовал API, что мне дали в ТЗ потому что там слишком мало данных, только имя)
 *
 * Я решил воспользоваться Postman чтобы сделать запрос и скопировал полученные данные,
 * которые вставил в файл peopleinspace.json
 */
export default class ISSPeopleService {
  getPeopleOnISS(): Cosmonaut[] {
    // const URL = 'http://www.howmanypeopleareinspacerightnow.com/peopleinspace.json'
    const ISS_LOCATION = 'International Space Station'

    const peopleInSpace: PersonInSpace[] = apiPeopleInSpace.people
    const peopleOnISS = peopleInSpace.filter(
      cosmonaut => cosmonaut.location === ISS_LOCATION
    )

    return peopleOnISS.map(cosmonaut => {
      const {
        name,
        biophoto,
        countryflag,
        launchdate,
        title,
        biolink
      } = cosmonaut

      const start = moment(launchdate)
      const now = moment()
      const duration = moment.duration(now.diff(start))
      const daysInSpace = Math.trunc(duration.asDays())

      return new Cosmonaut(
        name,
        biophoto,
        title,
        countryflag,
        daysInSpace,
        biolink
      )
    })
  }
}
