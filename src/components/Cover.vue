<template>
  <div class="Cover">
    <div class="Cover__logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="Cover__loader"></div>
    <div class="Cover__copyright">TJ Tatran Litovel © {{ (new Date()).getFullYear() }}</div>
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
    max-width: 60rem;
    margin: 6rem 0;

    img {
      max-width: 100%;
    }
  }

  &__copyright {
    font-size: 1.5rem;
  }

  &__loader {
    &, &:before, &:after {
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      animation-fill-mode: both;
      animation: load7 1.8s infinite ease-in-out;
    }

    color: #ffffff;
    font-size: 1rem;
    margin: 6rem 0;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
    }

    &:before {
      left: -3.5em;
      animation-delay: -0.32s;
    }

    &:after {
      left: 3.5em;
      animation-delay: 0.16s;
    }

    @keyframes load7 {
      0%,
      80%,
      100% {
        box-shadow: 0 2.5em 0 -1.3em;
      }
      40% {
        box-shadow: 0 2.5em 0 0;
      }
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
