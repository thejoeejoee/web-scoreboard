<template>
  <div class="Overview">
    <div class="Overview__content">

      <div class="Overview__title">
        <div class="Overview__team-logo Overview__team-logo--left">
          <img :src="baseApiUrl + matchData.homeTeamClubPhotoUrl" alt="">
        </div>
        <div class="Overview__team-title Overview__team-title--left">{{ matchData.homeTeamName }}</div>
        <div class="Overview__score">{{ score[0] }} - {{ score[1] }}</div>
        <div class="Overview__team-title Overview__team-title--right">{{ matchData.guestTeamName }}</div>
        <div class="Overview__team-logo Overview__team-logo--right">
          <img :src="baseApiUrl + matchData.guestTeamClubPhotoUrl" alt="">
        </div>
      </div>

      <div class="Overview__subtitle">
        {{ matchData.competitionName }}
        <br>
        {{ localeDateTime }}
        –
        {{  matchData.sportFieldName }}
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Overview",
  computed: {
    ...mapState(['matchData', 'baseApiUrl', 'score']),
    localeDateTime() {
      return new Date(this.matchData.matchStart.replace(/Z$/, '')).toLocaleString()
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.Overview {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 4em;

  &__content {
    // max-width: 60em;
    // background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__subtitle {
    background-color: $blue--dark;
    width: 25em;
    font-size: 1.5em;
    padding: .5em;
    text-align: center;
    font-weight: 500;
    margin-top: 1em;
    color: white;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  }

  &__team-title {
    width: 13em;
    height: 2.25em;
    font-weight: 600;
    font-size: 2.5em;
    padding: 0 .5em;
    background-color: $blue--dark;
    color: white;
    display: flex;
    align-items: center;

    &--left {
      justify-content: flex-end;
    }
  }

  &__score {
    font-size: 3em;
    font-weight: 600;
    height: 3em;
    width: 4.5em;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    // box-shadow: rgba(0, 0, 0, .5) 0 0 20px;
  }

  &__team-logo {
    height: 3em;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    padding: .5em 1.2em;
    box-sizing: border-box;
    position: relative;

    &--left {
      clip-path: polygon(25% 0, 100% 0, 75% 100%, 0% 100%);
      right: -1em;
    }

    &--right {
      clip-path: polygon(0 0, 75% 0, 100% 100%, 25% 100%);
      left: -1em;
    }

    img {
      max-height: 100%;
    }
  }
}

</style>
