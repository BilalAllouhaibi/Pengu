<template>
<div>
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
              <img @click="showMusicPlayer(song)" v-bind:src="song.thumbnails[1].url" />
              <i>{{ song.name }}</i>
              <i>Artist: {{ song.artist.name }}</i>
            </div>
          </template>
        </Items>
    </template>
  </Box>
  <teleport to="#popup">
  <div id="musicPlayer" v-show="musicPlayer">
  <MusicPlayer ref="musicPlayer" @close="musicPlayer = false">
    <template v-slot:info>
      <h1>{{chosenSong.name}} {{chosenSong.artist.name}}</h1>
    </template>
    <template v-slot:buttons>
      <h1>hej</h1>
    </template>
  </MusicPlayer>
  </div>
  </teleport>
</div>
</template>

<script>
import Box from "../components/Box.vue";
import Items from "../components/Items.vue";
import MusicPlayer from "../components/MusicPlayer.vue"
export default {
  components: {
    Box,
    Items,
    MusicPlayer
  },
  data() {
    return {
      searchTerm: "",
      musicPlayer: false,
      chosenSong:{
        artist: {
          name: "",
        }
      },
    };
  },
  methods: {
    async searchSong() {
      console.log("-----------view--------");
      console.log(this.searchTerm);
      await this.$store.dispatch("searchSong", this.searchTerm);
    },
    showMusicPlayer(song){
      console.log("-----------whowMusicPlayer-------------")
      console.log(song)
      this.chosenSong = song;
      this.musicPlayer = true
      console.log("chosensong " + this.chosenSong.artist.name)
    },
  },
};
</script>

<style>
</style>