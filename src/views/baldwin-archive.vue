<template>
  <div>
    <h1>Archive</h1>

    <img v-for="album in albums"
         width="200"
         @click="goToAlbumDetails(album.id)"
         :key="album.id"
         :src="album.img"
         :alt="album.title">
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
