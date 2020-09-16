<template>
  <div id="app">
    <GreenScreen/>
    <Controls></Controls>
  </div>
</template>

<script>
import GreenScreen from "@/components/Greenscreen";
import Controls from "@/components/Controls";

export default {
  name: 'app',
  components: {
    Controls,
    GreenScreen,
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html {
  overflow: hidden;
}
</style>
