<template>
  <div class="Controls">
    <div class="Controls__tab">
      <h5>Score & events</h5>

      TIMER: {{ !!dataTimerId ? 'YES' : 'NO' }} <br>

      <button @click="startDataTimer" v-if="!dataTimerId">START DATA TIMER</button>
      <button @click="stopDataTimer" v-if="dataTimerId">STOP DATA TIMER</button>
      <br>
      <label>
        <input type="checkbox" v-model="showEvents" :disabled="mode !== 'scoreboard'">
        show events
      </label>
    </div>

    <div class="Controls__tab">
      <h5>Time</h5>

      <div>
        <button class="Controls__btn Controls__btn--big" v-if="!timeIsRunning"
                @click="setTimeIsRunning(true)"
        >START
        </button>
        <button class="Controls__btn Controls__btn--big" v-if="timeIsRunning"
                @click="setTimeIsRunning(false)"
        >STOP
        </button>

        <button class="Controls__right Controls__btn Controls__btn--big" disabled>{{ timeFormatted }}</button>
        <hr>

        <button class="Controls__btn" @click="setTime(time - 15)">-15</button>
        <button class="Controls__btn" @click="setTime(time - 1)">-1</button>
        <button class="Controls__btn" @click="setTime(time + 1)">+1</button>
        <button class="Controls__btn" @click="setTime(time + 15)">+15</button>
        <input type="text" v-model="matchPart">
      </div>

      <h5>Teams</h5>
      <label>
        <input type="text" v-model="homeTeamShort" maxlength="5">
      </label>
      <label>
        <input type="text" v-model="guestTeamShort" maxlength="5">
      </label>
    </div>
    <div class="Controls__tab">
      <h5>Mode</h5>
      <div>
        <template v-for="s_ in modes">
          <button
              @click="setMode(s_)"
              :key="s_" :disabled="s_ === mode"
              class="Controls__btn Controls__btn--mid"
          >{{ s_ }}
          </button>
        </template>

      </div>
    </div>
    <div class="Controls__tab">
      <h5>{{ matchData.homeTeamName }} vs. {{ matchData.guestTeamName }}</h5>

      <div>
        <label>
          <input type="text" disabled v-model="matchUrl">
        </label>
        <hr>
        <button class="Controls__btn Controls__btn--big" @click="askForMatchUrl"
        >SET
        </button>
        <button class="Controls__btn Controls__btn--big" @click="loadMatchData"
        >LOAD
        </button>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex";
import {mapFields} from "vuex-map-fields";

export default {
  name: "Controls",
  data() {
    return {
      modes: [
        'cover',
        'overview',
        'homeRoster',
        'guestRoster',
        'scoreboard',
        'EMPTY'
      ],
    }
  },
  methods: {
    ...mapMutations(['setScore', 'setTimeIsRunning', 'setTime', 'setMode']),
    ...mapActions(['askForMatchUrl', 'startDataTimer', 'stopDataTimer', 'loadMatchData']),
  },
  computed: {
    ...mapState(['score', 'timeIsRunning', 'time', 'matchUrl', 'mode', 'matchData']),
    ...mapFields(['showEvents', 'dataTimerId', 'homeTeamShort', 'guestTeamShort', 'matchPart']),
    timeFormatted() {
      return `${("0" + ((this.time / 60) | 0)).slice(-2)}:${("0" + (this.time % 60)).slice(-2)}`;
    }
  },
  created() {
    this.stopDataTimer();
  }
}
</script>

<style scoped lang="scss">
.Controls {
  display: flex;
  flex-direction: row;

  &__right {
    float: right;
  }

  &__tab {
    border-right: 2px solid black;
    padding: 1em;
  }

  &__btn {
    margin-right: .5em;

    &--block {
      display: block;
      margin-bottom: .3em;
    }

    &--big {
      font-size: 2em;
    }

    &--mid {
      font-size: 1.5em;
    }
  }
}
</style>
