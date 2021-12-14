<template>
  <Box>
    <template v-slot:searchBar>
      <form @submit.prevent="searchSong">
        <input
          placeholder="sök på musik"
          v-model="searchTerm"
          type="search"
        />
        <button class="searchButton" type="submit"><i class="fas fa-search"></i></button>
      </form>
        <Items>
          <template v-slot:info>
            <div
              v-for="song in this.$store.state.songs.content"
              v-bind:key="song.id"
            >
              <img v-bind:src="song.thumbnails[1].url" />
              <i>{{ song.name }}</i>
              <i>Artist: {{ song.artist.name }}</i>
            </div>
          </template>
        </Items>
    </template>
  </Box>
</template>

<script>
import Box from "../components/Box.vue";
import Items from "../components/Items.vue";
export default {
  components: {
    Box,
    Items,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    async searchSong() {
      console.log("-----------view--------");
      console.log(this.searchTerm);
      await this.$store.dispatch("searchSong", this.searchTerm);
    },
  },
};
</script>

<style>
</style>