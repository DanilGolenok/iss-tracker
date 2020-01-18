export default class Cosmonaut {
  name: string
  photo: string
  title: string
  flag: string
  daysInSpace: number

  constructor(
    name: string,
    photo: string,
    title: string,
    flag: string,
    daysInSpace: number
  ) {
    this.name = name
    this.photo = photo
    this.title = title
    this.flag = flag
    this.daysInSpace = daysInSpace
  }
}
