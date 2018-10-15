// Sketch scope
// import Particle from './utils/Particle.js'
// import CustomCurve from './utils/Curve.js'
const Sketch = (p5) => {
  // Variables scoped within p5
  const canvasWidth = 600
  const canvasHeight = 600
  const scl = 30
  let rows = Math.floor(canvasWidth / scl)
  let cols = Math.floor(canvasHeight / scl)
  // Setup function
  // ======================================
  p5.setup = () => {
    // let canvas = p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL)
    let canvas = p5.createCanvas(canvasWidth, canvasHeight)
    canvas.parent('Sketch')
    // p5.background(0)
    p5.background(0)
    // p5.noFill()
    p5.stroke(255, 100)
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        p5.push()
        p5.translate(i * scl, j * scl)
        // p5.rect(0, 0, scl, scl)
        // let rnd = Math.random()
        let rnd = Math.pow(-1, i + j)
        if (rnd < 0) {
          p5.fill(255)
          p5.rect(0, 0, scl, scl)
          // p5.line(0, 0, scl, scl)
        } else {
          p5.fill(0)
          p5.rect(0, 0, scl, scl)
          // p5.line(0, scl, scl, 0)
        }
        p5.pop()
      }
    }
  }

  // Draw function
  // ======================================
  p5.draw = () => {
  }
  // Window Resize
  // ======================================
  // p5.windowResized = () => {
  //   p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  // }
}
export default Sketch
