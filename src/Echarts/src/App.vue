<script setup lang="ts">
import options from '../src/utils/echartsOptions'
</script>

<template>
  <Echarts width="1200px" :options="options"></Echarts>
</template>

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
