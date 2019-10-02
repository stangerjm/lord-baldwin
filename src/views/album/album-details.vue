<template>
  <div class="album-details">
    <button @click="goBack">Back</button>

    <baldwin-album :album="album"></baldwin-album>
  </div>
</template>

<script>
import albums from '../../content/albums';

export default {
  name: 'album-details',
  components: {
    BaldwinAlbum: () => import('../../components/baldwin-album'),
  },
  computed: {
    albumId() {
      return Number(this.$route.params.id);
    },
    album() {
      return albums.find(album => album.id === this.albumId);
    },
  },
  methods: {
    goBack() {
      this.$router.push('/music');
    },
  },
};
</script>

<style scoped>

</style>
