<template>
  <div class="GreenScreen">
    <transition name="fade" mode="out-in">

      <Scoreboard
          v-if="mode === 'scoreboard'"
          key="scoreboard"
      ></Scoreboard>

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

      <Cover
          v-if="mode === 'cover'"
          key="cover"
      ></Cover>

      <Overview
          v-if="mode === 'overview'"
          key="overview"
      ></Overview>

    </transition>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
import {mapState} from "vuex";
import Roster from "@/components/Roster";
import Cover from "@/components/Cover";
import Overview from "@/components/Overview";

export default {
  name: "GreenScreen",
  components: {Overview, Cover, Roster, Scoreboard},
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
  position: relative;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
