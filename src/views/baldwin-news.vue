<template>
  <article>
    <h1 class="baldwin-news--title">This just out...</h1>
    <section class="baldwin-news--main">
      <h3 class="baldwin-news--subtitle__blue">A digitally remastered collection of love songs</h3>
      <h3 class="baldwin-news--subtitle__blue">By Lord Baldwin</h3>
      <h3 class="baldwin-news--subtitle__green">Including two new songs;</h3>
      <h3 class="baldwin-news--subtitle">
        <span class="baldwin-news--subtitle__sky">Must Be Love</span>
        <span class="baldwin-news--subtitle__green">And</span>
        <span class="baldwin-news--subtitle__pink">The Journey of Me and You</span>
      </h3>
      <section class="baldwin-news--gallery">
        <img class="baldwin-news--forHer" src="../assets/images/ForHerRemastered.jpg" alt="For Her">
        <img class="baldwin-news--forHerNotes" src="../assets/images/ForHerNotes.jpg" alt="For Her notes">
      </section>
      <h3 class="baldwin-news--subtitle__yellow">Now available on streaming platforms everywhere</h3>
    </section>
  </article>
</template>

<script>
export default {
  name: 'baldwin-news',
};
</script>

<style>
  .baldwin-news--main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .baldwin-news--title {
    margin-left: 15.5rem;
    text-shadow: 2px 2px 1px #489877; 
  }

  .baldwin-news--subtitle {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
  }

  .baldwin-news--subtitle__blue {
    color: #01a7c8;
    font-size: 2rem;
    margin: 0;
    text-shadow: 2px 2px 1px #792ea3; 
  }

  .baldwin-news--subtitle__green {
    color: #8fcf61;
    font-size: 2rem;
    margin: 1rem 0;
    text-shadow: 2px 2px 1px #690c85; 
  }

  .baldwin-news--subtitle__sky {
    color: #a7dae9;
    text-shadow: 2px 2px 1px #0b6378; 
    font-size: 2.2rem;
  }

  .baldwin-news--subtitle__pink {
    color: #e8bfce;
    text-shadow: 2px 2px 1px #791781; 
    font-size: 2.2rem;
  }

  .baldwin-news--subtitle__yellow {
    color: #faff00;
    text-shadow: 2px 2px 1px #a30920; 
    font-size: 2rem;
  }

  .baldwin-news--gallery {
    display: flex;
    align-items: center;
    height: 25rem;
  }

  .baldwin-news--forHer {
    padding-right: 2rem;
    height: 100%;
  }

  .baldwin-news--forHerNotes {
    height: 100%;
  }
</style>
