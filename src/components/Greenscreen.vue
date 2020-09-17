<template>
  <div class="GreenScreen">
    <transition name="fade">
      <Scoreboard v-if="mode === 'scoreboard'"></Scoreboard>
    </transition>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
import {mapState} from "vuex";

export default {
  name: "GreenScreen",
  components: {Scoreboard},
  computed: {
    ...mapState(['mode']),
  }
}
</script>

<style scoped>
.GreenScreen {
  width: 1920px;
  height: 1080px;
  background-color: greenyellow;
  border: 6px solid deeppink;
  box-sizing: content-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
