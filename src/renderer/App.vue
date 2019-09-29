<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'mlean-hub',
    data () {
      return {
        transitionName: null
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body { font-family: 'Source Sans Pro', sans-serif; }

#wrapper {
  position: absolute;
  /* background:
    radial-gradient(
      ellipse at top left,
      rgba(255, 255, 255, 1) 40%,
      rgba(229, 229, 229, .9) 100%
    ); */
  background:rgba(255, 255, 255, 1) 70%;
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
  overflow-y: auto;
}

.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: 1s;
}

.slide-left-enter,
.slide-right-leave-to {
  transform: translate(100%, 0);
}
.slide-left-enter-to,
.slide-right-enter-to {
  transform: translate(0%, 0);
}
.slide-left-leave-to,
.slide-right-enter {
  transform: translate(-100%, 0);
}
</style>