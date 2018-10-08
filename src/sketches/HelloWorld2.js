// Sketch scope
const Metaballs = (p5) => {
  // Variables scoped within p5
  const canvasWidth = p5.windowWidth
  const canvasHeight = p5.windowHeight
  let dTheta = 0.03
  let bsize = 50
  let separation = 10
  let offset = 1
  window.p5 = p5

  // Setup function
  // ======================================
  p5.setup = () => {
    let canvas = p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL)
    canvas.parent('Metaballs')
    p5.background(0)
    // p5.blendMode(p5.HARD_LIGHT);
  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background(0)

    p5.ambientLight(100)
    p5.pointLight(250, 250, 250, 100, 100, 0)
    p5.ambientMaterial(50, 0, 160)
    p5.rotateY(180 + p5.frameCount * dTheta * 0.4)
    if (p5.mouseIsPressed) {
      if (offset <= 5) {
        offset += 3 * dTheta
      }
    } else if (offset > 0.7) {
      offset -= 10 * dTheta
    } else {
      offset = 0.7
    }
    separation = p5.constrain(offset, 0.7, 5)

    for (var i = 0; i <= 7; i++) {
      for (var j = -3; j <= 3; j++) {
        for (var k = -3; k <= 3; k++) {
          p5.push()
          p5.translate(i * bsize * separation - 3.5 * bsize * separation, j * bsize * separation, k * bsize * separation)
          p5.rotateX(p5.frameCount * dTheta + (i * 0.3))
          p5.box(bsize, bsize, bsize, 25, 25)
          p5.pop()
        }
      }
    }
  }
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }
}
export default Metaballs
