<template>
  <div id="app">
    <nav class="baldwin-nav">
      <ul class="baldwin-nav--list">
        <router-link class="baldwin-nav--item" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="baldwin-nav--item" :to="{ name: 'Music' }">Music</router-link>
        <router-link class="baldwin-nav--item" :to="{ name: 'News' }">News</router-link>
        <router-link class="baldwin-nav--item" :to="{ name: 'Store' }">Store</router-link>
        <router-link class="baldwin-nav--item" :to="{ name: 'Writing' }">Writing</router-link>
        <router-link class="baldwin-nav--item" :to="{ name: 'Bio' }">Bio</router-link>
        <router-link class="baldwin-nav--item" :to="{ name: 'Contact' }">Contact</router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "baldwin-nav"
};
</script>

<style>
</style>
