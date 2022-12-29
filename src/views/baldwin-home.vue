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
    grid-template-areas:
      "album1 . album2"
      ". album3 ."
      "album4 . album5";
  }

  .baldwin-home--album {
    max-width: 10rem;
    box-shadow: 0 0 10px 2px #fff;
  }

  .baldwin-home--album1 {
    grid-area: album1;
    transform: rotate(-45deg);
  }

  .baldwin-home--album2 {
    grid-area: album2;
    transform: rotate(45deg);
  }

  .baldwin-home--album3 {
    grid-area: album3;
  }

  .baldwin-home--album4 {
    grid-area: album4;
    transform: rotate(-45deg);
  }

  .baldwin-home--album5 {
    grid-area: album5;
    transform: rotate(45deg);
  }
</style>
