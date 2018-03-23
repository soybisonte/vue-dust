<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      responseData: []
    }
  },
  created () {
    this.fetchData()
  },
  mounted () {
  },
  methods: {
    async fetchData () {
      let response = await axios.get('http://jsonplaceholder.typicode.com/posts')
      this.responseData = response.data
    }
  }
}
</script>

<template>
  <div class="hello">
    <h1>Hola</h1>
    <h3 class="mobileVisible">I'm in mobile only</h3>
    <ul class="posts">
      <li v-for="(item, index) in responseData" :key="index" class="post--item">
        <h3>{{ item.title }}</h3>
        <small>{{item.userId}} : {{ item.id }}</small>
        <p>{{ item.body }}</p>
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/HelloWorld.styl" lang="stylus"></style>
