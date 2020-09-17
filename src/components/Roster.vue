<template>
  <div class="Roster">
    <div class="Roster__headline">{{ name }}</div>
    <div class="Roster__content">
      <div class="Roster__player" v-for="p in sortedPlayers" :key="p.id">
        <span class="Roster__number">{{ p.number }}</span> {{ p.personName }}
      </div>
      <!-- TODO: tune styling -->
      <div v-if="coachName" class="Roster__player">trenér: {{ coachName }}</div>
      <div v-if="leaderName" class="Roster__player">vedoucí: {{ leaderName }}</div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "Roster",
  props: {
    name: {type: String},
    players: {type: Array},

    leaderName: {type: String, default: null},
    coachName: {type: String, default: null},
  },
  computed: {
    sortedPlayers() {
      return _.sortBy(this.players, ['number'])
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.Roster {
  width: 60em;
  margin: 10em auto;

  &__headline {
    background-color: $blue--dark;
    color: white;
    font-size: 2em;
    font-weight: 600;
    padding: .5em .2em;
    position: relative;

    &:after, &:before {
      position: absolute;
      content: "";
      top: 0;
      height: 100%;
      width: 2em;
      background-color: $blue--dark;
    }

    &:before {
      left: 100%;
      clip-path: polygon(0 0, 0 0, 45% 100%, 0 100%);
    }

    &:after {
      right: 100%;
      clip-path: polygon(45% 0, 100% 0, 100% 100%, 100% 100%);
    }
  }

  &__content {
    background-color: white;
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &__player {
    font-size: 1.7em;
    margin: 0 0 .3em;
  }
  &__number {
    font-weight: 600;
    text-align: right;
    display: inline-block;
    width: 1.7em;
  }
}
</style>
