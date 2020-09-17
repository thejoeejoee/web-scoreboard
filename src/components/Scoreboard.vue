<template>
  <div class="Scoreboard">
    <div class="Scoreboard__logo">
      <img src="../assets/fish.png" alt="">
    </div>

    <div class="Scoreboard__data">

      <div class="Scoreboard__line Scoreboard__line--first Scoreboard__line--fill-left">
        <div class="Scoreboard__team">LIT</div>
        <div class="Scoreboard__score">
          {{ score[0] }} - {{ score[1] }}
        </div>
        <div class="Scoreboard__team">DUK</div>
      </div>

      <div class="Scoreboard__line Scoreboard__line--second Scoreboard__line--fill-left">
        <div class="Scoreboard__time">{{ timeFormatted }}</div>
        <div class="Scoreboard__match-part">1/2</div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'Scoreboard',
  data() {
    return {
      timeStart: new Date(),
      timerID: null,
      lastTimeTick: 0,
    }
  },
  computed: {
    ...mapState(['time', 'score', 'timeIsRunning']),

    timeFormatted() {
      return `${("0" + ((this.time / 60) | 0)).slice(-2)}:${("0" + (this.time % 60)).slice(-2)}`;
    }
  },
  created() {
    this.timerID = setInterval(() => {

      if (Math.abs(this.lastTimeTick - new Date()) > 1000 && this.timeIsRunning) {
        this.$store.commit(
            'setTime',
            this.time + 1
        );

        this.lastTimeTick = new Date();
      }

    }, 200);
  },
  beforeDestroy() {
    clearInterval(this.timerID);
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.Scoreboard {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-start;

  margin: 2em 0 0 2em;

  &__logo {
    max-width: 6em;
    z-index: 10;

    img {
      max-width: 100%;
    }
  }

  &__line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      left: 100%;
      height: 100%;
      top: 0;
      width: 1em;
      clip-path: polygon(0 0, 0 0, 100% 100%, 0 100%);
    }

    &--first {
      background-color: white;
      color: $blue--dark;
      padding: .4em;
      position: relative;

      &.Scoreboard__line--fill-left:before {
        background-color: white;
      }

      &:after {
        background-color: white;
      }
    }

    &--second {
      background-color: $blue--dark;
      color: white;
      height: 2em;
      padding: 0 6px;
      width: 60%;

      &.Scoreboard__line--fill-left:before {
        background-color: $blue--dark;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 55% 100%);
      }

      &:after {
        background-color: $blue--dark;
        width: 15px;
      }
    }

    &--fill-left:before {
      content: "";
      height: 100%;
      right: 100%;
      top: 0;
      width: 3.75em;
      position: absolute;
    }
  }

  &__team {
    font-size: 1.5em;
    padding: 0 0.4em;
    font-weight: 500;
  }

  &__score {
    font-size: 1.3em;
    font-weight: bold;
    width: 5.5ch;
    text-align: center;
  }

  &__time {
    font-size: 1.2em;
    color: white;
    padding-left: 0.6em;
    display: inline-block;
    background-color: $blue--dark;
  }

  &__match-part {
    font-size: 1.1em;
    color: white;
    padding: 0 0.4em;
    letter-spacing: 0.1em;
    display: inline-block;
    background-color: $blue--dark;
  }
}
</style>
