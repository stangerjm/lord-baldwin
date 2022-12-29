<template>
  <div id="app">
    <baldwin-nav class="baldwin-main--nav" />

    <div class="baldwin-main">

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
  display: flex;
  flex-direction: column;
  height: 100%;
}

.baldwin-main {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.baldwin-main--nav {
  flex-shrink: 0;
}

.baldwin-main--content {
  padding: 10px;
  flex: 1;
}
</style>
