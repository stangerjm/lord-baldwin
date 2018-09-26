<template>
  <article>
    <h1>Contact</h1>
    <img src="../assets/LBContact.png" alt="Lord Baldwin">
    <p>
      Lord Baldwin is available at his E-mail address:
      <a href="mailto:lordbaldwin@yahoo.com">lordbaldwin@yahoo.com</a>
    </p>
    <p>
      You can read more about Lord Baldwin by clicking
      <router-link :to="{ name: 'Bio' }">here</router-link>
      or by clicking the Bio link above.
    </p>
  </article>
</template>

<script>
export default {
  name: "baldwin-contact"
};
</script>

<style>
</style>
