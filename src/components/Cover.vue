<template>
  <div class="Cover">
    <div class="Cover__logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <h1 class="Cover__title">Vysílání v přípravě</h1>
  </div>
</template>

<script>
export default {
  name: "Cover"
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.Cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(135deg, $blue--dark, $blue--middle);
  background-size: 400% 400%;
  animation: ColorFade 20s ease infinite;
  color: white;

  &__logo {
    max-width: 60em;
    margin-bottom: 4em;

    img {
      max-width: 100%;
    }
  }

  &__title {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.8em;
    position: relative;
    letter-spacing: .04em;
    &:after {
      overflow: hidden;
      display: inline-block;
      vertical-align: bottom;
      position: absolute;
      left: 100%;
      animation: Ellipsis steps(6, end) 2s infinite;
      content: "\2026"; /* ascii code for the ellipsis character */
      width: 0;
    }
  }
}

@keyframes ColorFade {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@keyframes Ellipsis {
  to {
    width: 1.5em;
  }
}
</style>
