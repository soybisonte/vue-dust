// Sketch scope
// import Particle from './utils/Particle.js'
// import CustomCurve from './utils/Curve.js'
const Sketch = (p5) => {
  // Variables scoped within p5
  const canvasWidth = 600
  const canvasHeight = 600
  // Setup function
  // ======================================
  p5.setup = () => {
    // let canvas = p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL)
    let canvas = p5.createCanvas(canvasWidth, canvasHeight)
    canvas.parent('Sketch')
    p5.background(0)
  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background(0)
    p5.noFill()
    p5.stroke(255, 100)
    const iterations = 70
    for (var i = 0; i < iterations; i++) {
      let separation = 300 * Math.sin(i) / (i + 1)
      p5.push()
      p5.translate(canvasWidth / 2, canvasHeight / 2)
      p5.rotate(Math.PI / 4)
      p5.ellipse(0, 0, 2 * separation * i, separation * i)
      p5.ellipse(0, 0, separation * i, 2 * separation * i)
      p5.pop()
    }
  }
  // Window Resize
  // ======================================
  // p5.windowResized = () => {
  //   p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  // }
}
export default Sketch
