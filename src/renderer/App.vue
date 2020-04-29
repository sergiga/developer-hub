<template>
  <div id="app">
    <div id="wrapper" class="p-0 d-flex">
      <div class="side-menu"></div>
      <div class="app-content">
        <router-view name="header" />
        <router-view class="px-3" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mlean-hub'
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
  background:rgba(255, 255, 255, 1) 70%;
  height: 100vh;
  width: 100vw;
}

.side-menu {
  flex: 0 0 275px;
  background-color: rebeccapurple;
}

.app-content {
  flex: 1;
  overflow-y: auto;
}
</style>