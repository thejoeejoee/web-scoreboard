<template>
  <div>
    <div class="GreenScreen">


      <div class="Scoreboard">
        <div class="Scoreboard__line">
          <div class="Scoreboard__team">LIT</div>
          <div class="Scoreboard__score">
            {{ score[0] }}|{{ score[1] }}
          </div>

          <div class="Scoreboard__team">DUK</div>
        </div>
        <div class="Scoreboard__time">{{ timeFormatted }}</div>

      </div>


    </div>

    <div>
      <button @click="updateScore(0, score[0] + 1)">home +1</button>
      <button @click="updateScore(1, score[1] + 1)">away +1</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scoreboard',
  data() {
    return {
      score: [0, 0],
      time: 0,
      timeStart: new Date(),
    }
  },
  methods: {
    updateScore(i, val) {
      this.$set(this.score, i, val);
    }
  },
  computed: {
    timeFormatted() {
      return `${Number(this.time / 60).toFixed(0)}:${("0" + (this.time % 60)).slice(-2)}`;
    }
  },
  created() {
    setInterval(() => {
      this.time = ((new Date() - this.timeStart) / 1000) | 0 ;
    }, 500);
  }
}
</script>

<style scoped lang="scss">
.GreenScreen {
  background: rgb(173, 255, 47);
  padding: 40px;
  margin: 40px;
  min-height: 400px;
}

.Scoreboard {
  display: flex;
  flex-direction: column;
  width: 240px;
  position: relative;

  $shape--height: 3.1em;

  &:after {
    content: "";
    border: $shape--height solid transparent;
    display: inline-block;
    position: absolute;
    border-left: 1em solid darkblue;
    border-top: 0;
    height: 0;
    width: 0;
    left: 100%;
    top: 0;
  }

  &:before {
    content: "";
    border: $shape--height solid transparent;
    display: inline-block;
    position: absolute;
    border-right: 1em solid darkblue;
    border-bottom: 0;
    height: 0;
    width: 0;
    right: 100%;
    bottom: 0;
  }


  &__line {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: cornflowerblue;

  }

  &__team {
    vertical-align: middle;
    color: white;
    font-family: monospace;
    font-size: 24px;
    padding: 0 4px;
  }

  &__score {
    font-size: 24px;
    padding: 0 6px;
    font-weight: bold;
    color: white;
    display: inline-block;
    background-color: darkblue;
    vertical-align: middle;
    width: 5.5ch;
  }

  &__time {
    font-size: 26px;
    color: white;
    display: inline-block;
    background-color: cornflowerblue;
    border-top: darkblue 4px solid;
  }
}
</style>
