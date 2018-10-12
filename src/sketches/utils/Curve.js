export default class CustomCurve {
  constructor (P5, options) {
    this.p5 = P5
    this.position = {
      x: options.position.x,
      y: options.position.y
    }
    this.scaleSize = options.scaleSize
    this.radius = options.radius
  }
  display () {
    const {p5} = this
    const {position, radius} = this
    p5.push()
    p5.translate(position.x, position.y)
    p5.scale(this.scaleSize)
    p5.rectMode(p5.CENTER)
    p5.fill(0, 155, 250)
    p5.rect(0, 0, radius, radius)
    // p5.fill(175)
    // p5.ellipse(0, 0, 100, 100)
    p5.pop()
  }
  update () {
    // const {p5} = this
    // this.scaleSize = 2 * Math.cos(p5.frameCount * 0.09)
    // this.position.x += 10 * Math.cos(p5.frameCount * 0.03)
    this.updateWithControls()
  }
  updateWithControls () {
    const {p5} = this
    const {position, radius} = this
    let moving = 10
    if (p5.keyIsDown(p5.LEFT_ARROW)) {
      position.x -= moving
    }
    if (p5.keyIsDown(p5.RIGHT_ARROW)) {
      position.x += moving
    }
    if (p5.keyIsDown(p5.UP_ARROW)) {
      position.y -= moving
    }
    if (p5.keyIsDown(p5.DOWN_ARROW)) {
      position.y += moving
    }
    position.x = p5.constrain(position.x, 0 + radius / 2, p5.windowWidth - radius / 2)
    position.y = p5.constrain(position.y, 0 + radius / 2, p5.windowHeight - radius / 2)
    // if (keyIsDown(UP_ARROW)) {
    //   y -= 5;
    // }
    // if (keyIsDown(DOWN_ARROW)) {
    //   y += 5;
    // }
  }
}
