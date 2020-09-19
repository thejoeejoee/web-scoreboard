<template>
  <div class="Controls">
    <div class="Controls__tab">
      <h5>Score & events</h5>

      <button @click="setScore({i: 0, val: score[0] + 1})" class="Controls__btn Controls__btn--big">home + 1</button>
      <button @click="setScore({i: 1, val: score[1] + 1})" class="Controls__btn Controls__btn--big">away + 1</button>

      <div>
        <label><input type="number" v-model="localScore[0]"></label>
        <label><input type="number" v-model="localScore[1]"></label>
        <button class="Controls__btn Controls__btn--big">SET</button>
      </div>

      <hr>

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
        <hr>

        <button class="Controls__btn" @click="setTime(time - 15)">-15</button>
        <button class="Controls__btn" @click="setTime(time - 1)">-1</button>
        <button class="Controls__btn" @click="setTime(time + 1)">+1</button>
        <button class="Controls__btn" @click="setTime(time + 15)">+15</button>
      </div>
    </div>
    <div class="Controls__tab">
      <h5>Mode</h5>
      <div>
        <template v-for="s_ in modes">
          <button
              @click="setMode(s_)"
              :key="s_" :disabled="s_ === mode"
              class="Controls__btn Controls__btn--mid Controls__btn--block"
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
      localScore: [0, 0],
      innerTime: 0,
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
    ...mapActions(['askForMatchUrl']),
  },
  computed: {
    ...mapState(['score', 'timeIsRunning', 'time', 'matchUrl', 'mode', 'matchData']),
    ...mapFields(['showEvents']),
    localTime: {
      set(val) {
        this.innerTime = val;
      },
      get() {
        return this.innerTime;
      }
    }
  },
  watch: {
    score(new_) {
      this.localScore = new_;
    }
  }
}
</script>

<style scoped lang="scss">
.Controls {
  display: flex;
  flex-direction: row;

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
