<template>
  <div class="Roster">
    <div class="Roster__headline">{{ name }}</div>
    <div class="Roster__content">
      <div class="Roster__player" v-for="p in sortedPlayers" :key="p.id">
        <span class="Roster__number">
          {{ p.number }}
        </span>
        {{ p.personName }}

        <span class="Roster__player-info" v-if="shouldDisplayStats">
          {{ p.goals }}/{{ p.goalsSeven }}
        </span>
      </div>
      <!-- TODO: tune styling -->

      <div v-if="coachName" class="Roster__player">
        <span class="Roster__number">OV</span>
        {{ coachName }}
      </div>
      <div v-if="leaderName" class="Roster__player">
        <span class="Roster__number">T</span>
        {{ leaderName }}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapState} from "vuex";

export default {
  name: "Roster",
  props: {
    name: {type: String},
    players: {type: Array},

    leaderName: {type: String, default: null},
    coachName: {type: String, default: null},
  },
  computed: {
    ...mapState(['matchData']),
    sortedPlayers() {
      return _.sortBy(this.players, ['number'])
    },
    shouldDisplayStats() {
      return this.matchData.homeTeamScore > 0 || this.matchData.guestTeamScore > 0
    }
  }
}
/*
id	"ee10ca78-e7f1-4ccc-835e-05165fbf51ee"
competitionTeamId	"2ebe6810-f450-4f7a-9ed4-8377b3a27921"
number	14
personId	"baf7f05c-9ec5-46de-b937-1f1c50b1193b"
personName	"Maitner David"
goals	2
goalsSeven	0
twoMinutesCount	0
yellowCards	0
redCards	0
redCardsPlus	0
blueCards	0
 */
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.Roster {
  width: 60rem;
  margin: 10rem auto;

  &__headline {
    background-color: $blue--dark;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem .5rem;
    position: relative;

    &:after, &:before {
      position: absolute;
      content: "";
      top: 0;
      height: 100%;
      width: 4rem;
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
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__player {
    font-size: 1.7rem;
    margin: 0 0 .6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  &__player-info {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 1.3rem;
  }

  &__number {
    font-weight: 600;
    text-align: right;
    display: inline-block;
    width: 2.5rem;
    margin-right: .5rem;
  }
}
</style>
