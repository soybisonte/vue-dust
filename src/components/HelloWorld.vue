<script>
import p5 from 'p5'
import Sketch from '../sketches/Tiles'
// import Sketch from '../sketches/Squares'
// import Sketch from '../sketches/Elipses'
export default {
  name: 'Sketch',
  data () {
    return {
      appSize: {width: p5.windowWidth, height: p5.windowHeight},
      SketchWrapper: null,
      title: 'Wrapper to create Stuff'
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
    p5.remove()
  },
  destroyed () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<template>
  <div class="">
    <h3>{{title}}</h3>
    <div id="Sketch" class="Sketch">
    </div>
  </div>
</template>

<style src="../styles/Sketch.styl" lang="stylus"></style>
