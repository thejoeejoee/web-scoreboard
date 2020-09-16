<template>
  <div>


      <button @click="setScore({i: 0, val: score[0] + 1})">home + 1</button>

      <button @click="setScore({i: 1, val: score[1] + 1})">away + 1</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
name: "Controls",
  methods: {
    ...mapMutations(['setScore'])
  },
  computed: {
    ...mapState(['score'])
  }
}
</script>

<style scoped>

</style>
