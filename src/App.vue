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

<style src="@/styles/main.scss" lang="scss"></style>
