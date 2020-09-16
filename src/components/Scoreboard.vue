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
    }
  },
  computed: {
    ...mapState(['time', 'score']),

    timeFormatted() {
      return `${("0" + ((this.time / 60) | 0)).slice(-2)}:${("0" + (this.time % 60)).slice(-2)}`;
    }
  },
  created() {
    this.timerID = setInterval(() => {

      this.$store.commit(
          'setTime',
          ((new Date() - this.timeStart) / 1000) | 0
      );

    }, 500);
  },
  beforeDestroy() {
    clearInterval(this.timerID);
  }
}
</script>

<style scoped lang="scss">
$blue--dark: #1c1e54ff;

.Scoreboard {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: flex-start;
  width: 400px;

  &__logo {
    max-width: 120px;
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
      width: 20px;
      clip-path: polygon(0 0, 0 0, 100% 100%, 0 100%);
    }

    &--first {
      background-color: white;
      color: $blue--dark;
      padding: 6px;
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
      height: 30.5px;
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
      width: 50px;
      position: absolute;
    }
  }

  &__team {
    font-size: 24px;
    padding: 0 4px;
    font-weight: 600;
  }

  &__score {
    font-size: 24px;
    font-weight: bold;
    width: 5.5ch;
    text-align: center;
  }

  &__time {
    font-size: 24px;
    color: white;
    padding-left: 4px;
    display: inline-block;
    background-color: $blue--dark;
  }

  &__match-part {
    font-size: 20px;
    color: white;
    padding: 0 4px;
    display: inline-block;
    background-color: $blue--dark;
  }
}
</style>
