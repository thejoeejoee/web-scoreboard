<template>
  <div class="Event__container">

    <div class="Event">
      <div class="Event__number">

        <template v-if="hasPlayer">
          <span class="Event__number--hash">#</span>{{ event.playerNumber }}
        </template>

      </div>
      <div class="Event__title">
        <span>{{ eventTitle }}</span>

        <span class="Event__title--info" v-if="eventInfo">
          {{ eventInfo }}
        </span>
      </div>
      <div class="Event__time">{{ event.matchTime.replace(/^00:/, '') }}</div>

    </div>

  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import {MATCH_EVENT_TYPE} from "@/const.ts";

export default {
  name: "Event",
  computed: {
    ...mapState(['matchData']),
    ...mapGetters({
      'event': 'lastEvent',
    }),
    eventInfo() {
      return {
        [MATCH_EVENT_TYPE.GOAL]: `${this.event.homeTeamScore} - ${this.event.guestTeamScore}`,
        [MATCH_EVENT_TYPE.GOAL_FROM_PENALTY]: `${this.event.homeTeamScore} - ${this.event.guestTeamScore}`,
        [MATCH_EVENT_TYPE.FAILED_PENALTY]: `🚫 7m hod`,
        [MATCH_EVENT_TYPE.PENALTY_2_MINUTES]: `⏰ 2 minuty`,
        [MATCH_EVENT_TYPE.YELLOW_CARD]: `🟨 žlutá karta`,
        [MATCH_EVENT_TYPE.RED_CARD]: `🟥 červená karta`,
        [MATCH_EVENT_TYPE.RED_CARD_PLUS]: `🟥 červená karta+`,
        [MATCH_EVENT_TYPE.BLUE_CARD]: `🟦️ modrá karta`,
        [MATCH_EVENT_TYPE.TEAM_TIME_OUT]: `⏲️ team time-out`,
      }[this.event.competitionMatchEventTypeId]
    },
    hasPlayer() {
      return !!this.event.playerNumber
    },
    eventTitle() {
      if (this.hasPlayer) return this.event.playerName;

      return {
        [this.matchData.homeCompetitionTeamId]: this.matchData.homeTeamName,
        [this.matchData.guestCompetitionTeamId]: this.matchData.guestTeamName,
      }[this.event.competitionTeamId]|| '';
    }
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
    width: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: -1em;
    clip-path: polygon(0 0, calc(100% - 3rem) 0, 100% 100%, 3rem 100%);

    &--hash {
      font-size: 1.6rem;
    }
  }

  &__title {
    font-size: 2.25rem;
    height: 4rem;
    min-width: 40rem;
    color: white;
    background-color: $blue--dark;
    font-weight: 500;
    display: flex;
    align-items: center;
    padding: 0 6rem 0 3rem;
    justify-content: space-between;

    &--info {
      font-size: 1.8rem;
      margin-left: 1rem;
    }
  }

  &__time {
    font-size: 2rem;
    font-weight: 600;
    height: 6rem;
    width: 12rem;
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
