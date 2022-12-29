<template>
  <div id="app">
    <baldwin-nav />

    <div class="baldwin-main">
      <h1 class="baldwin-main--title">Lord Baldwin</h1>

      <div class="baldwin-main--content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'app',
  components: {
    BaldwinNav: defineAsyncComponent(() => import('./components/baldwin-nav')),
  },
};
</script>

<style>
html {
  height: 100vh;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}

.baldwin-main--title {
  font-size: 42px;
  text-align: center;
}

.baldwin-main {
  height: 100%;
}

.baldwin-main--content {
  padding: 10px;
}
</style>
