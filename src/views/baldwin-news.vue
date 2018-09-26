<template>
  <article>
    <h1>Lord Baldwin News</h1>
    <section>
      <h3>Now Available</h3>
      <img src="../assets/Addicted-To-The-Machine.jpg" alt="Addicted to the Machine">
    </section>
    <section>
      <h3>This is the first new album by Lord Baldwin in years!</h3>
      <img src="../assets/Addicted-To-The-Machine-Back.jpg" alt="Addicted to the Machine">
    </section>
    <footer>
      <p><router-link :to="{ name: 'Store' }">Order</router-link> your copy today!</p>
      <p>Listen to song samples on the <router-link :to="{ name: 'Music' }">Music</router-link> page</p>      
    </footer>
  </article>
</template>

<script>
export default {
  name: "baldwin-news"
};
</script>

<style>
</style>
