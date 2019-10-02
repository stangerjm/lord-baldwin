<template>
  <div id="app">
    <baldwin-nav></baldwin-nav>

    <h1 class="baldwin-main--title">Lord Baldwin</h1>

    <div class="baldwin-main--content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    BaldwinNav: () => import('./components/baldwin-nav'),
  },
};
</script>

<style>
.baldwin-main--title {
  font-size: 42px;
  text-align: center;
}

.baldwin-main--content {
  padding: 10px;
}
</style>
