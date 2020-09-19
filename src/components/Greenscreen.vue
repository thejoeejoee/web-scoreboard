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

    <transition name="fade" mode="out-in">
      <Event v-if="showEvents && mode === 'scoreboard'"></Event>
    </transition>
  </div>
</template>

<script>
import Scoreboard from "@/components/Scoreboard";
import {mapState} from "vuex";
import Roster from "@/components/Roster";
import Cover from "@/components/Cover";
import Overview from "@/components/Overview";
import Event from "@/components/Event";

export default {
  name: "GreenScreen",
  components: {Event, Overview, Cover, Roster, Scoreboard},
  computed: {
    ...mapState(['mode', 'matchData', 'showEvents']),
  }
}
</script>

<style scoped>
.GreenScreen {
  width: 1920px;
  height: 1080px;
  background-color: #adff2f;
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
