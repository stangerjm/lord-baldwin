<template>
  <article class="baldwin-downloads">
    <section class="baldwin-downloads--letters">
      <img class="baldwin-downloads--letters1" src="../assets/images/FromTheLostLettersSent1.jpg" />
      <img class="baldwin-downloads--letters2" src="../assets/images/FromTheLostLettersSent3.jpg" />
      <img class="baldwin-downloads--letters3" src="../assets/images/FromTheLostLettersSent2.jpg" />
      <img class="baldwin-downloads--letters4" src="../assets/images/FromTheLostLettersSent4.jpg" />
    </section>
    <section class="baldwin-downloads--rest">
      <section class="baldwin-downloads--titleContainer">
        <h3 class="baldwin-downloads--title baldwin-downloads--header__med">For a Limited Time,</h3>
        <h3 class="baldwin-downloads--download baldwin-downloads--header__small"><span class="baldwin-downloads--emphasis">Free</span> download of</h3>
        <h3 class="baldwin-downloads--lordBaldwin baldwin-downloads--header__large">Lord Baldwin's</h3>
        <h3 class="baldwin-downloads--lost baldwin-downloads--header__med">From the Lost Letters Sent</h3>
        <h3 class="baldwin-downloads--lost baldwin-downloads--header__small">Memoirs from an Invisible Songwriter</h3>
        <h3 class="baldwin-downloads--pdf baldwin-downloads--header__med">All four books</h3>
        <h3 class="baldwin-downloads--pdf baldwin-downloads--header__med">In PDF format</h3>
      </section>
      <section class="baldwin-downloads--poster">
        <a :href="poster" class="baldwin-downloads--resilientPoster" download><img src="../assets/images/ResilientPoster.png" /></a>
        <h3 class="baldwin-downloads--header__small">Free poster download</h3>
        <h3 class="baldwin-downloads--header__small">Lord Baldwin's "Resilient"</h3>
        <h3 class="baldwin-downloads--header__small">In PDF format</h3>
      </section>
      <section class="baldwin-downloads--resilientMusical">
        <img class="baldwin-downloads--musical" src="../assets/images/ResilientTheMusical.png" />
        <h3 class="baldwin-downloads--musicalTitle baldwin-downloads--header__small">
          <span>"Resilient - The Musical"</span>
          <span>Web-based episodes about the houseless</span>
          <span>Musical play coincides with the music and songs from the album "Resilient"</span>
        </h3>
      </section>
      <img class="baldwin-downloads--resilientAlbum" src="../assets/images/Resilient.jpg" />
      </section>
  </article>
</template>

<script setup>
import poster from '../assets/pdfs/Resilient.pdf';
</script>

<style scoped lang="scss">
  .baldwin-downloads {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }

  .baldwin-downloads--title {
    text-shadow: 2px 2px 1px #c76d30; 
  }

  .baldwin-downloads--download {
    text-shadow: 2px 2px 1px #c76d30; 
  }

  .baldwin-downloads--lordBaldwin {
    color: #2e74b5;
    text-shadow: 2px 2px 1px #fff;
  }

  .baldwin-downloads--pdf {
    text-shadow: 2px 2px 1px #03ace9;
  }

  .baldwin-downloads--lost {
    text-shadow: 3px 3px 1px #618b45;
  }

  .baldwin-downloads--emphasis {
    color: #55ede9;
    text-shadow: 1px 1px 1px #a4b0c6; 
  }

  .baldwin-downloads--rest {
    display: grid;
    gap: 1rem;
    margin-left: 1rem;
    align-items: end;
    grid-template-areas:
      "title poster"
      "musical resilient";
  }

  .baldwin-downloads--letters {
    grid-area: gallery;
    display: grid;
    gap: 1rem;
    align-items: end;
    grid-template-columns: repeat(2, min-content);
    grid-template-areas:
      "letters1 letters2"
      "letters3 letters4";
  }

  .baldwin-downloads--resilientPoster {
    align-self: flex-end;

    img {
      height: 20rem;
    }
  }

  .baldwin-downloads--musical {
    height: 10rem;
  }

  .baldwin-downloads--resilientAlbum {
    height: 15rem;
    justify-self: end;
  }

  img[class*="baldwin-downloads--letters"] {
    height: 20rem;
  }

  h3 {
    text-align: center;
    margin: 0.25rem;
  }

  h3.baldwin-downloads--header__small {
    font-size: 1.25em;
  }

  h3.baldwin-downloads--header__med {
    font-size: 2em;
  }

  h3.baldwin-downloads--header__large {
    font-size: 3em;
  }

  .baldwin-downloads--titleContainer {
    grid-area: title;
    align-self: start;
  }

  .baldwin-downloads--poster {
    grid-area: poster;
    display: flex;
    flex-direction: column;
    text-shadow: 2px 2px 1px #761bff;
  }

  .baldwin-downloads--resilientMusical {
    grid-area: musical;
    display: flex;
    text-shadow: 2px 2px 1px #cc53b6;
    align-self: stretch;
  }

  .baldwin-downloads--musicalTitle {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .baldwin-downloads--resilient {
    grid-area: resilient;
  }

  .baldwin-downloads--letters1 {
    grid-area: letters1;
  }

  .baldwin-downloads--letters2 {
    grid-area: letters2;
  }

  .baldwin-downloads--letters3 {
    grid-area: letters3;
  }

  .baldwin-downloads--letters4 {
    grid-area: letters4;
  }

  @media screen and (max-width: 1600px) {
    .baldwin-downloads {
      width: 100%;
    }
  }

  @media screen and (max-width: 1300px) {
    .baldwin-downloads {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1100px) {
    .baldwin-downloads {
      img {
        max-width: 12rem;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 999px) {
    .baldwin-downloads {
      flex-direction: column-reverse;
      gap: 1rem;
      align-items: center;
    }
  }

  @media screen and (max-width: 550px) {
    .baldwin-downloads--rest {
      grid-template-areas:
        "title"
        "poster"
        "musical"
        "resilient";
    }

    .baldwin-downloads--resilientPoster {
      align-self: center;
    }

    .baldwin-downloads--resilientAlbum {
      justify-self: center;
    }

    .baldwin-downloads--resilientMusical {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
