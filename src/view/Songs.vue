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
              <img @click="showMusicPlayer(song);" v-bind:src="song.thumbnails[1].url" />
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
        <a>{{chosenSong.name}}</a> 
        <a>{{chosenSong.artist.name}}</a>
      <img v-bind:src="chosenSong.thumbnails[1].url"/>
    </template>
    <template v-slot:buttons>
      <button @click="pauseSong"><i class="fas fa-pause-circle"></i></button>
      <button @click="playPausedSong"><i class="fas fa-play-circle"></i></button>
      <button><i class="fas fa-share-alt"></i></button>
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
        },
        thumbnails:[
               {url: "",},
               {url: "",}
        ],
        videoId:"",
        
      },
    };
  },
  methods: {
    async searchSong() {
      console.log("-----------view--------");
      console.log(this.searchTerm);
      await this.$store.dispatch("searchSong", this.searchTerm);
    },
    async showMusicPlayer(song){
      console.log("-----------whowMusicPlayer-------------")
      console.log(song)
      this.chosenSong = song;
      this.musicPlayer = true
      console.log("chosensong " + this.chosenSong.artist.name)
     this.playSong(this.chosenSong.videoId)
    },
   playSong(videoId){
     console.log("-----------playSongView-----------------")
     console.log(videoId)
     this.$store.dispatch("playSong", videoId)
   },
   pauseSong(){
     this.$store.dispatch("pauseSong")
   },
   playPausedSong(){
     this.$store.dispatch("playPausedSong")
   },
  },
};
</script>

<style>
</style>