<template>
  <div id="app">
    <GreenScreen/>
    <Controls></Controls>

    <Github></Github>
  </div>
</template>

<script>
import GreenScreen from "@/components/Greenscreen";
import Controls from "@/components/Controls";
import Github from "@/components/Github";

export default {
  name: 'app',
  components: {
    Github,
    Controls,
    GreenScreen,
  }
}
</script>

<style src="@/styles/main.scss" lang="scss"></style>
