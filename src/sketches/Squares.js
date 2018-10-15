// Sketch scope
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
    const iterations = 20
    const initialRadius = 150
    // const separation = 2
    p5.rectMode(p5.CENTER)
    for (var i = 1; i < iterations; i++) {
      // let separation = 300 * Math.sin(i) / (i + 1)
      p5.push()
      p5.translate(canvasWidth / 2, canvasHeight / 2)
      // p5.rotate(Math.pow(i, 0.2))
      // p5.rect(0, 0, initialRadius, initialRadius)
      // p5.triangle(initialRadius * Math.cos(), 75, 10, 20, 86, 0)
      polygon(0, 0, initialRadius + i, i)
      // for (var j = 1; j <= 20; j++) {
      //   polygon(0, 0, initialRadius / j, 6)
      // }
      p5.pop()
    }
  }
  p5.keyReleased = () => {
    if (p5.keyCode === 83) {
      let now = Date.now()
      p5.saveCanvas(`isolated_${now}`, 'png')
    }
    return false
  }
  function polygon (x, y, radius, npoints) {
    let angle = p5.TWO_PI / npoints
    p5.beginShape()
    for (var a = 0; a < p5.TWO_PI; a += angle) {
      let sx = x + Math.cos(a) * radius
      let sy = y + Math.sin(a) * radius
      p5.vertex(sx, sy)
    }
    p5.endShape(p5.CLOSE)
  }
}
export default Sketch
