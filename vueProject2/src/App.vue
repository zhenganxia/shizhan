<template>
  <div id="app">
    <left-nav/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    components: {
      leftNav
    }
  }
</script>

<style>
#app{
  font-family: 'Microsoft YaHei'
}
  .main {
    float: left;
    width: 95%;
    background-color: #EFF2F7;
    height: 100%;
    overflow: hidden;
  }
</style>