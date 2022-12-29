<template>

  <section class="baldwin-music">

    <h2 class="baldwin-music--title">Latest Music</h2>

    <section class="baldwin-music--latest">

      <template v-for="({ img, id }, idx) in LatestAlbums" :key="id">

        <div v-if="shouldRenderTopSpacer(idx)"
             class="baldwin-music--spacer"></div>

        <img :src="img"
             class="baldwin-music--albumImg"
             :class="`baldwin-music--album${idx + 1}`"
             @click="goToAlbum(id)" />

        <div v-if="shouldRenderBottomSpacer(idx)"
             :key="`spacer-${id + idx}`"

             class="baldwin-music--spacer"></div>

      </template>

    </section>

  </section>

</template>

<script>
import LatestAlbums from '../content/latest-albums';

export default {
  name: 'baldwin-music',
  data() {
    return {
      LatestAlbums,
    };
  },
  methods: {
    shouldRenderBottomSpacer(idx) {
      return idx === 0 || idx === 2;
    },
    shouldRenderTopSpacer(idx) {
      return idx === 2 || idx === 4;
    },
    goToAlbum(albumId) {
      this.$router.push(`/album/${albumId}`);
    },
  },
};
</script>

<style lang="scss">
@import "../sass/global/vars";

@mixin transform-img($rotation: null, $transX: 0, $transY: 0) {
  @if($rotation) {
    transform: rotate($rotation) scale(0.70) translate($transX, $transY);
  } @else {
    transform: scale(0.70);
  }
}

.baldwin-music {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.baldwin-music--title {
  text-align: center;
}

.baldwin-music--latest {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
}

.baldwin-music--album1 {
  @include transform-img(-45deg, 0, 70px);
}

.baldwin-music--album2 {
  @include transform-img(45deg, 0, 70px);
}

img.baldwin-music--album3 {
  @include transform-img();
}

div.baldwin-music--album3 > .baldwin-music--albumImg {}

.baldwin-music--album4 {
  @include transform-img(-45deg, 70px);
}

.baldwin-music--album5 {
  @include transform-img(45deg, -70px);
}

.baldwin-music--latestAlbum {}

.baldwin-music--albumImg, .baldwin-music--spacer {
  width: percentage(1/3);
}

.baldwin-music--albumImg:hover {
  cursor: pointer;
}

@media screen and (max-width: $break-med) {
  .baldwin-music--albumImg {
    width: 100%;
    margin: 5px 0;
  }

  img[class*=baldwin-music--album] {
    transform: none;
  }
}

</style>
