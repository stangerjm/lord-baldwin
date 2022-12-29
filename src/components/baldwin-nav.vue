<template>
  <nav class="baldwin-nav">
    <div class="baldwin-nav--collapsedMenu" @click="toggleNav">
      <div class="baldwin-nav--line"></div>
      <div class="baldwin-nav--line"></div>
      <div class="baldwin-nav--line"></div>
    </div>
    <ul class="baldwin-nav--list"
        :class="{ 'baldwin-nav--showNav': displayCollapsedNav }">
      <router-link class="baldwin-nav--item" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="baldwin-nav--item" :to="{ name: 'News' }">News</router-link>
      <router-link class="baldwin-nav--item" :to="{ name: 'Store' }">Store</router-link>
      <router-link class="baldwin-nav--item" :to="{ name: 'Writing' }">Writing</router-link>
      <router-link class="baldwin-nav--item" :to="{ name: 'Bio' }">Bio</router-link>
      <router-link class="baldwin-nav--item" :to="{ name: 'Archive' }">Archive</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'baldwin-nav',
  data() {
    return {
      displayCollapsedNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.displayCollapsedNav = !this.displayCollapsedNav;
    },
  },
};
</script>

<style lang="scss">
@import "../sass/global/vars";

.baldwin-nav--collapsedMenu {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;

  @media screen and (min-width: $break-med + 1) {
    display: none;
  }
}

.baldwin-nav--showNav > .baldwin-nav--item {
  display: block !important;
}

.baldwin-nav--line {
  box-sizing: border-box;
  width: 100%;
  border: 2px solid white;
  margin: 5px 0;
}

.baldwin-nav--list {
  display: flex;
  margin: 0;
  padding: 0;
  background: #f8f3df;

  @media screen and (max-width: $break-med) {
    flex-direction: column;

    .baldwin-nav--item {
      padding: 10px;
      display: none;
    }
  }
}

.baldwin-nav--item {
  flex: 1;
  text-align: center;
  color: #3f8e7b;
  padding: 20px 0;
}

.baldwin-nav--item:hover {
  background: #575757;
}

</style>
