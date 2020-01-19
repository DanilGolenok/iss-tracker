export default class Cosmonaut {
  name: string
  photo: string
  title: string
  flag: string
  daysInSpace: number
  wikiPage: string

  constructor(
    name: string,
    photo: string,
    title: string,
    flag: string,
    daysInSpace: number,
    wikiPage: string
  ) {
    this.name = name
    this.photo = photo
    this.title = title
    this.flag = flag
    this.daysInSpace = daysInSpace
    this.wikiPage = wikiPage
  }
}
