// import p5 from 'p5'
export default class Particle {
  constructor (pos, size, color, P5) {
    this.p5 = P5
    this.position = pos
    this.size = size
    this.color = color
    this.backSize = size
  }
  display () {
    const {position, size, color, p5} = this
    p5.fill(color)
    p5.ellipse(position.x, position.y, size.x, size.y)
    // p5.rect(position.x, position.y, size.x, size.y)
  }
  updateSize () {
    this.size.x += 25
    this.size.y += 25
  }
  updatePos (velY, ceil) {
    const {p5} = this
    const canvasWidth = p5.windowWidth
    const canvasHeight = p5.windowHeight
    if (this.position.y > canvasHeight) {
      this.position.x = p5.random(0, canvasWidth)
    }
    this.position.y = (this.position.y + velY) % ceil
    // this.position.x = this.position.x + Math.sin(0.01 * p5.frameCount)
  }
  resetSize () {
    this.size.x = this.size.x < 5 ? this.size.x : this.size.x - 50
    this.size.y = this.size.y < 5 ? this.size.y : this.size.y - 50
  }
}
