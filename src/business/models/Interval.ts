export default class Interval {
  static readonly DELAY: number = 5000
  static subscribers: (() => void)[] = []

  static subscribe(ticker: () => void) {
    this.subscribers.push(ticker)
  }

  static tick() {
    setInterval(() => this.subscribers.forEach(ticker => ticker()), this.DELAY)
  }
}

Interval.tick()
