<template>
  <div id="app">
    <baldwin-nav></baldwin-nav>
    <h1 class="main-title">Lord Baldwin</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {
    BaldwinNav: () => import("./components/baldwin-nav")
  }
};
</script>

<style>
.main-title {
  font-size: 42px;
}
</style>
