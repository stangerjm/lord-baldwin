<template>
  <div class="baldwin-album">

    <!-- Album title -->
    <h3 class="baldwin-album--title">{{album.title}}</h3>

    <!-- Album image -->
    <img :src="album.img" :alt="album.title">

    <!-- Render each song -->
    <div v-for="song in album.songs" :key="song.songTitle">

      <!-- If song has MP3 clip, render link -->
      <a v-if="hasClip(song)"
         target="_blank"
         :href="song.mp3Path">
        {{song.songTitle}}
      </a>

      <!-- Otherwise, just render song title -->
      <p v-else>{{song.songTitle}}</p>

    </div>

  </div>
</template>

<script>
export default {
  name: 'baldwin-album',
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hasClip(song) {
      return song.mp3Path != null;
    },
  },
};
</script>

<style scoped>

</style>
