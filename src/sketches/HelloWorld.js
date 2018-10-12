// Sketch scope
import Particle from './utils/Particle.js'
import CustomCurve from './utils/Curve.js'
const Sketch = (p5) => {
  // Variables scoped within p5
  const canvasWidth = p5.windowWidth
  const canvasHeight = p5.windowHeight
  // let time = 0
  const system = []
  let curve
  // const particula = new Particle(
  //   {
  //     x: canvasWidth / 2,
  //     y: canvasHeight / 2
  //   },
  //   {
  //     x: 100,
  //     y: 100
  //   },
  //   p5.color(255, 100, 120)
  // )

  // Setup function
  // ======================================
  p5.setup = () => {
    // let canvas = p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL)
    let canvas = p5.createCanvas(canvasWidth, canvasHeight)
    canvas.parent('Sketch')
    p5.background(0)

    const m = 100

    for (var i = 0; i < m; i++) {
      let randX = p5.random(0, canvasWidth)
      let randY = p5.random(0, canvasHeight)
      let randSize = p5.random(2, 10)
      // let randR = p5.random(0, 255)
      // let randG = p5.random(0, 255)
      // let randB = p5.random(0, 255)

      system[i] = new Particle(
        {
          x: randX,
          y: randY
        },
        {
          x: randSize,
          y: randSize
        },
        p5.color(255, 100, 120),
        // p5.color(randR, randG, randB)
        p5
      )
    }
    curve = new CustomCurve(p5, {
      position: {
        x: canvasWidth / 2,
        y: canvasHeight - 100
      },
      radius: 40,
      scaleSize: 1
    })
  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background(0)
    p5.noStroke()
    p5.fill(125, 0, 255)

    // particula.display()
    let vel = p5.random(0.3, 0.95)
    for (var i = 0; i < system.length; i++) {
      system[i].display(p5)
      system[i].updatePos(vel, canvasHeight + 10, p5)
    }
    // if (p5.keyIsPressed) {
    //   system[0].updateSize()
    // } else {
    //   system[0].resetSize()
    // }
    curve.display()
    curve.update()
  }

  // Window Resize
  // ======================================
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }
}
export default Sketch
