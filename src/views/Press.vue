<script>
import Reveal from 'reveal.js'
export default {
  name: 'Press',
  components: {},
  data () {
    return {
    }
  },
  created () {
  },
  props: {
    color: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      Reveal.initialize({
        transition: 'fade'
      })
    })
  },
  methods: {},
  computed: {
  }
}
</script>

<template>
  <div id="Press" class="Press">
    <div class="reveal">
      <div class="slides">
        <section>
          <h1>De arte generativo</h1>
          <h3>y otros conjuros.</h3>
          <h5>Heriberto Rodríguez / 2018</h5>
        </section>
        <section>
          <div class="section-left">
            <h3>Índice</h3>
            <hr>
            <ol>
              <li>Presentación</li>
              <li>¿Qué es el arte generativo?</li>
              <li>Herramientas</li>
              <li>Proceso</li>
              <li>Isolated System</li>
              <li>Otros conjuros</li>
            </ol>
          </div>
        </section>
        <section>
          <div class="section-left">
            <img src="../assets/bisonte.jpg">
          </div>
          <div class="section-right">
            <h3>Heri Rodríguez <br> A.K.A. Bisonte</h3>
            <hr>
            <p>Lic. en Matemáticas Aplicadas, F.C.F.M. UadeC, Saltillo, Coahuila</p>
            <p>Creative Tech, BBVA Bancomer CDMX</p>
            <a href="https://www.instagram.com/soybisonte/" target="_blank">IG: @soybisonte</a> <br>
            <a href="www.soybisonte.com" target="_blank">www.soybisonte.com</a>

          </div>
        </section>

        <section>
          <h2>El arte generativo se define como:</h2>
          <p>"Cualquier práctica artística en donde al artista use un sistema, como un conjunto de reglas del lenguaje natural, un programa de computadora, una máquina, o demás invenciones de procedimientos, el cual pueda ser echado a andar con algún nivel de autonomía contribuyendo con o resultando una obra de arte completa."</p>
          <p>-Philip Galantier</p>
        </section>
        <section>
          <h2>En mi opinión:</h2>
          <p>El arte generativo es un sistema autónomo <s>o conjunto de reglas</s> que construye una pieza visual.</p>
        </section>

        <section>
          <div class="section-left">
            <h1>Herramientas</h1>
            <hr>
          </div>
        </section>
        <section>
          <ul>
            <li> <a href="https://processing.org/">Processing</a> </li>
            <li> <a href="https://p5js.org/">P5.js</a> </li>
            <li> <a href="https://learnopengl.com/Getting-started/Shaders">GLSL</a> </li>
            <li> <a href="https://threejs.org/">THREE.js</a> </li>
            <li>Matemáticas <s>chingos</s></li>
          </ul>
        </section>
        <section>
          <div class="section-left">
            <h1>Proceso</h1>
            <hr>
          </div>
        </section>
        <section>
          <div class="section-left">
            <p>
              Líneas, Elipses, Rectángulos, Poligonos, Formas
            </p>
            <hr>
          </div>
          <div class="section-right">
            <p>Embalaje, Desplazamiento, Repetición, Recursividad, Algoritmos</p>
            <hr>
          </div>
          <p>Ecuaciones, Funciones, Principios, Definiciones </p>
          <hr>
        </section>
        <section>
          <h1>Framework</h1>
          <hr>
          <div class="rectangle-min">
              <h4>Definiciones</h4>
              <hr>
          </div>
          <div class="rectangle-min">
              <h4>Estructura</h4>
              <hr>
          </div>
          <div class="rectangle-min">
              <h4>Geometría</h4>
              <hr>
          </div>
          <div class="rectangle-min">
              <h4>Pieza Visual</h4>
              <hr>
          </div>
        </section>
        <section>
          <div class="section-left">
            <h1>Isolated System</h1>
            <hr>
          </div>
        </section>
        <section>
          <div class="section-left">
            <h1>Trabajos previos</h1>
            <hr>
            <a href="https://codepen.io/collection/nVpkGW/" target="_blank">3D stuff</a>
          </div>
        </section>
        <section>
          <div class="section-left">
            <h1>Segunda Ley de la Termodinámica</h1>
            <hr>
            <p>"En un sistema aislado el entropía siempre aumenta..."</p>
          </div>
        </section>
        <section>
          <div class="section-left">
            <h1>El Concepto</h1>
            <hr>
            <p>"El estado ordenado de un sistema solo tiene una configuración, con lo que es más probable encontrar desorden"</p>
          </div>
        </section>
        <!-- <section>
          <iframe src="https://www.openprocessing.org/sketch/606662/embed/" width="1000" height="700"></iframe>
          <iframe src="https://www.openprocessing.org/sketch/606661/embed/" width="1920" height="1080"></iframe>
        </section> -->
      </div>
    </div>
  </div>
</template>

<style src="../styles/views/Press.styl" lang="stylus"></style>
