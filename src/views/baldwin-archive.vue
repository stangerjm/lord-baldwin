<template>
  <div>
    <h1>Archive</h1>
    <a href="#"
       role="button"
       @click="(e) => {
          e.preventDefault();
          goToAlbumDetails(album.id);
        }"
        v-for="album in albums"
        :key="album.id">
      <img width="200"
           :src="album.img"
           :alt="album.title">
    </a>
  </div>
</template>

<script>
import albums from '../content/albums';

export default {
  name: 'baldwin-archive',
  computed: {
    albums() {
      return albums;
    },
  },
  methods: {
    goToAlbumDetails(albumId) {
      this.$router.push(`/album/${albumId}`);
    },
  },
};
</script>

<style>
</style>
