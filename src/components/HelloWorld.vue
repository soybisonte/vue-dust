<script>
import p5 from 'p5'
import Sketch from '../sketches/HelloWorld'
export default {
  name: 'Sketch',
  data () {
    return {
      appSize: {width: p5.windowWidth, height: p5.windowHeight},
      SketchWrapper: null,
      title: 'Elipse'
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
  components: {},
  mounted: function () {
    this.$nextTick(() => {
        const SketchWrapper = new p5(Sketch) // eslint-disable-line
    })
  },
  beforeDestroy () {
    window.p5.remove()
  },
  destroyed () {
  },
  methods: {},
  computed: {
  }
}
</script>

<template>
  <div id="Sketch" class="Sketch">
    <h3>{{title}}</h3>
  </div>
</template>

<style src="../styles/Sketch.styl" lang="stylus"></style>
