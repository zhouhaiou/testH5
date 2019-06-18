<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="container">
      <transition name="slide">
        <router-view/>
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  background: #f5f5f5;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.container {
  flex: 1;
}
</style>
