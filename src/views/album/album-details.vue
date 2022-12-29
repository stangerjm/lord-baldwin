<template>
  <div class="album-details">
    <button @click="goBack">Back</button>

    <baldwin-album :v-if="album != null" :album="album" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import albums from '../../content/albums';

export default {
  name: 'album-details',
  components: {
    BaldwinAlbum: defineAsyncComponent(() => import('../../components/baldwin-album')),
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
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>

</style>
