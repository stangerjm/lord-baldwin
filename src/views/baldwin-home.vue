<template>
  <div class="baldwin-home">
    <h1>Welcome to Lord Baldwin's site!</h1>
    <div class="baldwin-home--music">
      <template v-for="({ img, id }, idx) in LatestAlbums" :key="id">
        <img
          :src="img"
          :class="`baldwin-home--album${idx + 1}`"
          class="baldwin-home--album"
        />
      </template>
    </div>
  </div>
</template>

<script>
import LatestAlbums from '../content/latest-albums';

export default {
  name: 'baldwin-home',
  data() {
    return {
      LatestAlbums,
    };
  },
};
</script>

<style scoped lang="scss">
  .baldwin-home {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }

  .baldwin-home--music {
    display: grid;
    grid-gap: 4rem;
    grid-template-areas:
      "album1 album2 album3"
      "album4 album5 album6"
      "album7 album8 album9";
    padding: 2rem;
  }

  .baldwin-home--album {
    width: 8rem;
    box-shadow: 0 0 3px 1px #fff;
  }

  .baldwin-home--album1 {
    grid-area: album1;
    transform: rotate(-45deg);
  }

  .baldwin-home--album2 {
    grid-area: album2;
    transform: translateY(-2rem);
  }

  .baldwin-home--album3 {
    grid-area: album3;
    transform: rotate(45deg);
  }

  .baldwin-home--album4 {
    grid-area: album4;
    border-radius: 5rem;
    transform: translateX(-2rem);
  }

  .baldwin-home--album5 {
    grid-area: album5;
    border-radius: 1.2rem;
    transform: scale(2.3);
  }

  .baldwin-home--album6 {
    grid-area: album6;
    border-radius: 5rem;
    transform: translateX(2rem);
  }

  .baldwin-home--album7 {
    grid-area: album7;
    transform: rotate(-45deg);
  }

  .baldwin-home--album8 {
    grid-area: album8;
    transform: translateY(2rem);
  }

  .baldwin-home--album9 {
    grid-area: album9;
    transform: rotate(45deg);
  }
</style>
