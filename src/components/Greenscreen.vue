<template>
  <div class="GreenScreen">
    <transition name="fade" mode="out-in">
      <Scoreboard v-if="mode === 'scoreboard'"></Scoreboard>

      <Roster
          v-if="mode === 'homeRoster'" key="homeRoster"
          :name="matchData.homeTeamName" :players="matchData.homeTeamPlayers"
          :leader-name="matchData.homeTeamLeaderName" :coach-name="matchData.homeTeamCoachName"
      ></Roster>
      <Roster
          v-if="mode === 'guestRoster'" key="guestRoster"
          :name="matchData.guestTeamName" :players="matchData.guestTeamPlayers"
          :leader-name="matchData.guestTeamLeaderName" :coach-name="matchData.guestTeamCoachName"
      ></Roster>
    </transition>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
import {mapState} from "vuex";
import Roster from "@/components/Roster";

export default {
  name: "GreenScreen",
  components: {Roster, Scoreboard},
  computed: {
    ...mapState(['mode', 'matchData']),
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
  transition: opacity .4s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
