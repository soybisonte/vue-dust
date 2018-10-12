// Sketch scope
const Sketch = (p5) => {
  // Variables scoped within p5
  const canvasWidth = p5.windowWidth
  const canvasHeight = p5.windowHeight
  let time = 0
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
    p5.fill(0, 10)
    p5.rect(0, 0, canvasWidth, canvasHeight)

    p5.background(0)

    p5.noStroke()
    p5.fill(125, 255, 0, 200)
    time += 0.2
    let n = 7
    let separation = 1
    for (var i = 0; i < n; i++) {
      let xPos = 25 * Math.cos(0.5 * time + i * separation)
      let yPos = 25 * Math.sin(0.3 * time + i * separation)
      p5.ellipse(p5.mouseX + xPos, p5.mouseY + yPos, 5, 5)
    }
  }

  // Window Resize
  // ======================================
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }
}
export default Sketch
