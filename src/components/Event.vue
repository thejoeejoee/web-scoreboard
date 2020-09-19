<template>
  <div class="Event__container">

    <div class="Event">
      <div class="Event__number">{{ event.playerNumber }}</div>
      <div class="Event__title">{{ event.playerName }}</div>
      <div class="Event__time">{{ event.matchTime }}</div>

    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Event",
  computed: {
    ...mapGetters({
      'event': 'lastEvent'
    }),
  }
}
/*
id	"ac237520-bf95-4583-ad2b-0330a8c5d42d"
matchTime	"00:57:30"
periodTypeId	1
competitionTeamId	"63599ef4-5bf8-407b-9bde-a3c8a374b90e"
competitionMatchEventTypeId	1
competitionMatchParticipantId	"e0c613ee-51c0-4d6b-be7e-4cad855c2b10"
playerName	"Hrdlička Lubomír"
playerNumber	7
guestTeamScore	28
homeTeamScore	22
 */
</script>

<style scoped lang="scss">
@import "src/styles/variables";
.Event {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__number {
    font-size: 2.5rem;
    font-weight: 600;
    background-color: white;
    color: $blue--dark;
    height: 6rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: -1em;
    clip-path: polygon(0 0, calc(100% - 3rem) 0, 100% 100%, 3rem 100%);
  }

  &__title {
    font-size: 2.25rem;
    height: 4rem;
    width: 40rem;
    color: white;
    background-color: $blue--dark;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 0 3rem;
  }

  &__time {
    font-size: 2rem;
    font-weight: 600;
    height: 6rem;
    width: 16rem;
    color: $blue--dark;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: -6rem;
    clip-path: polygon(3rem 0, 100% 0, calc(100% - 3rem) 100%, 0% 100%);

    // box-shadow: rgba(0, 0, 0, .5) 0 0 20px;
  }

  &__container {
    position: absolute;
    bottom: 4em;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
