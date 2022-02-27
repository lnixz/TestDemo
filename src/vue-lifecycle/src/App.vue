<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button type="button" class="btn btn"  @click="click">点击改变</button>
    <h2>{{userInfo}}</h2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  beforeCreate() {
    console.log(this);
     this.$store.dispatch('getUserInfo')
  },
  methods: {
    click() {
      this.$store.dispatch('change','hi 你好')
    }
  },
  computed: mapState({
    userInfo: state => state
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
