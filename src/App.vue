<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="box">
      <router-link to="/site">点位主</router-link>
      <router-link to="/yanzheng">广告主</router-link>
      <!-- <router-link to="/yanzheng">验证</router-link> -->

    </div>

    <!-- <router-link to="/ad">广告主</router-link> -->
    <!-- <HeaderDiv :logo="hh"></HeaderDiv> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HeaderDiv
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box{
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  background-color: lightgray;
  position: fixed;
  bottom:0;
}

</style>
