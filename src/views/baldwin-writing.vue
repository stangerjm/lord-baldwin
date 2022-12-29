<template>
  <header>
    <h1 class="baldwin-writing--title">Lord Baldwin Writings</h1>
    <h2 class="baldwin-writing--sub">Now available in book stores everywhere</h2>
  </header>
  <article class="baldwin-writing">
    <h3 class="baldwin-writing--ants">
      <span ref="antsRow1" class="baldwin-writing--ants__row1">Stepping between</span>
      <span ref="antsRow2" class="baldwin-writing--ants__row2">the ants</span>
    </h3>
    <img class="baldwin-writing--ants1" src="../assets/images/SteppingBetweenTheAnts1.jpg" />
    <img class="baldwin-writing--ants2" src="../assets/images/SteppingBetweenTheAnts2.png" />
    <img class="baldwin-writing--ants3" src="../assets/images/SteppingBetweenTheAnts3.jpg" />
    <img class="baldwin-writing--ants4" src="../assets/images/SteppingBetweenTheAnts4.png" />
    <section class="baldwin-writing--resilient">
      <h3>Resilient</h3>
      <img src="../assets/images/ResilientTheMusical.jpg" />
    </section>
    <h3 class="baldwin-writing--letters">
      <span ref="lettersRow1" class="baldwin-writing--letters__row1">From the Lost</span>
      <span ref="lettersRow2" class="baldwin-writing--letters__row2">Letters Sent</span>
    </h3>
    <img class="baldwin-writing--letters1" src="../assets/images/FromTheLostLettersSent1.jpg" />
    <img class="baldwin-writing--letters2" src="../assets/images/FromTheLostLettersSent2.jpg" />
    <img class="baldwin-writing--letters3" src="../assets/images/FromTheLostLettersSent3.jpg" />
    <img class="baldwin-writing--letters4" src="../assets/images/FromTheLostLettersSent4.jpg" />
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CircleType from 'circletype';

const antsRow1 = ref();
const antsRow2 = ref();
const lettersRow1 = ref();
const lettersRow2 = ref();

onMounted(() => {
  new CircleType(antsRow1.value).radius(384);
  new CircleType(antsRow2.value).radius(384);
  new CircleType(lettersRow1.value).radius(800);
  new CircleType(lettersRow2.value).radius(800);
});
</script>

<style lang="scss">
  .baldwin-writing {
    display: grid;
    margin: 0 auto;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(5, min-content);
    grid-template-areas:
      "ants ants . letters letters"
      "ants1 ants2 resilient letters1 letters2"
      "ants3 ants4 resilient letters3 letters4";
  }

  .baldwin-writing--title {
    text-align: center;
    font-size: 2.5rem;
    text-shadow: 3px 3px 1px #ac2652; 
    margin: 0;
    margin-top: 1rem;
  }

  .baldwin-writing--sub {
    text-align: center;
    color: #dd7a31;
    font-size: 3.5rem;
    text-shadow: 3px 3px 1px #0200e0; 
    margin: 0;
  }

  .baldwin-writing--ants {
    font-size: 2rem;
    grid-area: ants;
    text-align: center;
    color: #2f9afb;
    text-shadow: 3px 3px 1px #5d025c; 
    margin: 0;
  }

  .baldwin-writing--ants1 {
    grid-area: ants1;
  }

  .baldwin-writing--ants2 {
    grid-area: ants2;
  }

  .baldwin-writing--ants3 {
    grid-area: ants3;
  }

  .baldwin-writing--ants4 {
    grid-area: ants4;
  }

  .baldwin-writing--resilient {
    grid-area: resilient;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #74a279;
    font-size: 2rem;
    text-shadow: 3px 3px 1px #6c389a; 
  }

  .baldwin-writing--letters {
    grid-area: letters;
    text-align: center;
    font-size: 2rem;
    color: #fed968;
    text-shadow: -2px 2px 1px #4c889c; 
    margin: 0;
  }

  .baldwin-writing--ants__row2 {
    position: absolute;
    transform: translateY(-1.5rem);
  }

  .baldwin-writing--letters1 {
    grid-area: letters1;
  }

  .baldwin-writing--letters2 {
    grid-area: letters2;
  }

  .baldwin-writing--letters3 {
    grid-area: letters3;
  }

  .baldwin-writing--letters4 {
    grid-area: letters4;
  }

  .baldwin-writing img {
    height: 15rem;
    justify-self: center;
    overflow: hidden;
  }

  @media screen and (max-width: 999px) {
    .baldwin-writing {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
      grid-template-areas:
        "ants ants"
        "ants1 ants2"
        "ants3 ants4"
        "resilient resilient"
        "letters letters"
        "letters1 letters2"
        "letters3 letters4";

      .baldwin-writing--title,
      .baldwin-writing--sub,
      .baldwin-writing--ants,
      .baldwin-writing--resilient,
      .baldwin-writing--letters {
        font-size: 1.5rem;
      }

      .baldwin-writing--ants {
        margin-bottom: 0.5rem;
      }

      .baldwin-writing--ants__row2 {
        position: absolute;
        transform: translateY(-1rem);
      }

      img {
        width: 10rem;
      }

      .baldwin-writing--ants1 {
        justify-self: end;
      }

      .baldwin-writing--ants2 {
        justify-self: start;
      }

      .baldwin-writing--ants3 {
        justify-self: end;
      }

      .baldwin-writing--ants4 {
        justify-self: start;
      }

      .baldwin-writing--letters1 {
        justify-self: end;
      }

      .baldwin-writing--letters2 {
        justify-self: start;
      }

      .baldwin-writing--letters3 {
        justify-self: end;
      }

      .baldwin-writing--letters4 {
        justify-self: start;
      }
    }
  }
</style>
