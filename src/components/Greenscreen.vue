<template>
  <div class="GreenScreen">
    <Scoreboard></Scoreboard>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";

export default {
  name: "GreenScreen",
  components: {Scoreboard}
}
</script>

<style scoped>
.GreenScreen {
  width: 1920px;
  height: 1080px;
  background-color: greenyellow;
  border: 4px solid deeppink;
  box-sizing: content-box;
}
</style>
