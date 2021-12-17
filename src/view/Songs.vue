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
          <button class="searchButton" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
        
        <img id="minimizedMusicplayer"
          v-if="miniMusicPlayer"
          @click="showmusicPlayer = true"
          v-bind:src="chosenSong.thumbnails[1].url"
        />

        <Items>
          <template v-slot:info>
            <div
              v-for="song in this.$store.state.songs.content"
              v-bind:key="song.id"
            >
              <img
                @click="showMusicPlayer(song);"
                v-bind:src="song.thumbnails[1].url"
              />
              <i>{{ song.name }}</i>
              <i>Artist: {{ song.artist.name }}</i>
            </div>
          </template>
        </Items>
      </template>
    </Box>
    
    <teleport to="#popup">
      <div id="musicPlayer" v-if="musicPlayer">
        <MusicPlayer ref="musicPlayer" @close="showmusicPlayer = false">
          <template v-slot:info>
            <a>{{ chosenSong.name }}</a>
            <a>{{ chosenSong.artist.name }}</a>
            <img @click="showmusicPlayer = false" v-bind:src="chosenSong.thumbnails[1].url" />
          </template>
          <template v-slot:buttons>
            <button @click="copyToClipBoard"><i class="fas fa-clipboard"></i></button>
            <input v-model="textToCopy" type="text" id="textToCopy"/>
            <input
              @change="changeVolume"
              type="range"
              v-model="newVolume"
              min="0"
              max="100"
            />
            <button @click="pauseSong">
              <i class="fas fa-pause-circle"></i>
            </button>
            <button @click="playSong(this.chosenSong.videoId)"><i class="fas fa-power-off"></i></button>
            <button @click="playPausedSong">
              <i class="fas fa-play-circle"></i>
            </button>
          </template>
        </MusicPlayer>
      </div>
    </teleport>

  </div>
</template>

<script>

import router from "../router/router.js"
import axios from "axios"
import Box from "../components/Box.vue";
import Items from "../components/Items.vue";
import MusicPlayer from "../components/MusicPlayer.vue";
export default {
  components: {
    Box,
    Items,
    MusicPlayer,
  },
  data() {
    return {
      showLink: false,
      playerState: -1,
      routeId: this.$route.query.songId,
      textToCopy:"",
      searchTerm: this.$route.query.results,
      newVolume: 50,
      showmusicPlayer: true,
      chosenSong: {
        artist: {
          name: "",
        },
        thumbnails: [{ url: "" }, { url: "" }],
        videoId: "",
      },
    }
  },
 
  computed: {
    miniMusicPlayer() {
      if(this.showmusicPlayer){
        return false
      }
      else{ return true}
  },
  musicPlayer(){
    if(this.showmusicPlayer && this.chosenSong.name){
      return true
    }else{
      return false
    }
  }
  },
  
  methods: {
     copyToClipBoard() {
  navigator.clipboard.writeText(this.textToCopy);
  alert("Copied the text: " + this.textToCopy);
  },
    getPlayerState(){
     let data = window.player.getPlayerState()
     console.log(data)
     this.playerState = data
     console.log(this.playerState)
    },
    async searchSong() {
      console.log("-----------view--------");
      console.log(this.searchTerm); 
      await this.$store.dispatch("searchSong", this.searchTerm);
     router.push({name:'Songs', query:{results: `${this.searchTerm}`}})
    },
    async showMusicPlayer(song) {
      console.log("-----------whowMusicPlayer-------------");
      console.log(song);
      this.chosenSong = song;
      console.log(this.chosenSong)
      router.replace({name:'Song', query:{songId: `${this.chosenSong.videoId}`}})
      this.showmusicPlayer = true;
      console.log("dis --------" + this.$route.query.songId)
       this.$route.query.songId = this.chosenSong.videoId
      this.textToCopy = `http://localhost:8080/Song?songId=${this.$route.query.songId}`
      this.playSong(this.chosenSong.videoId)
    },
      
    async pauseSong() {
      await this.$store.dispatch("pauseSong");
      this.getPlayerState()
    },
    playPausedSong() {
      this.getPlayerState()
    },
     playSong(videoId) {
       videoId = this.$route.query.songId
       this.$store.dispatch("playSong", videoId); 
      
    },
    changeVolume(){
      this.$store.dispatch("changeVolume", this.newVolume)
    },
  },
  
  

    async created(){
    this.routeId = this.$route.query.songId
    this.textToCopy = `http://localhost:8080/Songs?songId=${this.$route.query.songId}`
    console.log("CREAAAATEEEEEED")
    console.log(this.searchTerm)
    console.log(this.routeId)
    console.log(this.textToCopy)
    if(this.$route.query.results){
    await this.$store.dispatch("searchSong", this.searchTerm);
    }else if(this.routeId){
      try{let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/song/${this.routeId}`)
      this.chosenSong = data.data
      }catch(error){
        alert("error")
      }
    }
   },

};
</script>

<style>
#minimizedMusicplayer {
  border-radius: 50%;
  position: fixed;
  margin: 1em;
  bottom: 0;
  right: 0;
  display: grid;
  display:inline-block;
   width: 5em;
  border: solid;
  box-shadow: 0px 0px 29px 10px #FF5F00;
  cursor: pointer
  }
</style>