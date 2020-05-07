<template>
  <div id="app">
    <div id="wrapper" class="p-0 d-flex">
      <div class="side-menu border-right">
        <h3 class="text-uppercase text-center py-4">{{ $route.name }}</h3>
      </div>
      <div class="app-content">
        <router-view name="header" />
        <router-view />
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

section:not(:last-child) {
  border-bottom: 1px solid #DEE2E6;
}

#wrapper {
  position: absolute;
  background:rgba(255, 255, 255, 1) 70%;
  height: 100vh;
  width: 100vw;
}

.side-menu {
  flex: 0 0 260px;
}

.app-content {
  flex: 1;
  overflow-y: auto;
}
</style>