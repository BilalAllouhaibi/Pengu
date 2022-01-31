<template>
  <div >
    <Box>
      <template v-slot:searchBar>
        <form @submit.prevent="searchPlaylist">
          <input placeholder="sök på spellista"
          v-model="searchTerm"
          type="search"/>
           <button class="searchButton" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <Items>
          <template v-slot:info>
            <div v-for="playlist in playlists.content" v-bind:key="playlist.browseId" >
              <a @click="chosePlaylist(playlist.browseId)">
                {{playlist.title}}
              </a>
            </div>
          </template>
        </Items>
      </template>
      </Box>
      <teleport to="#popup">
        <div @mouseleave="showPlayingSong = false" @mouseover="getPlaylistSongIndex" id="musicplayer" v-if="musicPlayer">
          <MusicPlayer  ref="musicPlayer" @close="showmusicPlayer = false">
            <template v-slot:info>
              <a id="songName" @click="goToSong(chosenPlaylistSongs[index].videoId)" v-if="showPlayingSong">
                {{chosenPlaylistSongs[index].name}}
              </a>
            </template>
            <template v-slot:buttons>
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
             <button @click="playPrevSong(); getPlaylistSongIndex();">
              <i class="fas fa-backward"></i>
            </button>
             <button @click="playNextSong(); getPlaylistSongIndex();">
              <i class="fas fa-forward"></i>
            </button>
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
import axios from "axios";
import Box from "../components/Box.vue"
import Items from "../components/Items.vue"
import MusicPlayer from "../components/MusicPlayer.vue"
import router from '../router/router';
export default {
components:{
  Box,
  Items,
  MusicPlayer
},
data(){
  return{
   searchTerm:"",
  thumbnails:{url: ""},
  playlists: [],
  chosenPlaylistSongs:{

  },
  newVolume: 50,
  musicPlayer: false,
  showPlayingSong: false,
  index: 0
    }
  
},
methods:{
  async searchPlaylist(){
    await this.$store.dispatch("searchPlaylist", this.searchTerm)
    this.playlists = this.$store.state.playlists
    console.log(this.playlists)
  },
  async chosePlaylist(playlistId){
    let data = await axios.get(`https://yt-music-api.herokuapp.com/api/yt/playlist/${playlistId}`)
    this.chosenPlaylistSongs =JSON.parse(JSON.stringify( data.data.content));
    console.log(this.chosenPlaylistSongs)
    window.player.cuePlaylist(this.chosenPlaylistSongs);
    window.player.loadPlaylist(this.chosenPlaylistSongs.map(x=>x.videoId))
    this.musicPlayer = true
  },
  goToSong(videoId){
    console.log(videoId)
    router.push(`http://localhost:8080/Song?songId=${videoId}`)
  },
    getPlaylistSongIndex(){
    let data =  window.player.getPlaylistIndex()
    this.index = data
    this.showPlayingSong = true
  },
   changeVolume(){
      this.$store.dispatch("changeVolume", this.newVolume)
    },
   playNextSong(){
         window.player.nextVideo()
      },
    playPrevSong(){
        window.player.previousVideo()
      
    },
    pauseSong(){
      this.$store.dispatch("pauseSong")
    },
    playPausedSong(){
      this.$store.dispatch("playPausedSong")
    }
}
}
</script>

<style>
#songName:hover{
  cursor: pointer;
}

</style>