<template>
  <article>
    <header>
      <h1>Biography</h1>
      <img src="../assets/images/CLB.jpg" alt="">
    </header>
    <section v-for="(entry, idx) in bio" :key="idx">
      <hr v-if="idx !== 0">
      <p v-for="(paragraph, idx) in entry" :key="idx">
        {{paragraph}}
      </p>
    </section>
  </article>
</template>

<script>
import bio from '../content/bio';

export default {
  name: 'baldwin-bio',
  computed: {
    bio() {
      return bio;
    },
  },
};
</script>

<style>
</style>
