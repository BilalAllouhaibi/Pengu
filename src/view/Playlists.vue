<template>
  <div>
    <Box>
      <template v-slot:searchBar>
        <form @submit.prevent="searchPlayList">
          <input
            placeholder="sök på spellista"
            v-model="searchTerm"
            type="search"
          />
          <button class="searchButton" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>

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
            <img v-bind:src="chosenSong.thumbnails[1].url" />
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
import Box from "../components/Box.vue"
import MusicPlayer from "../components/MusicPlayer.vue"
import Items from "../components/Items.vue"
export default {
  components:{
    Box,
    MusicPlayer,
    Items
  }
};
</script>

<style>
</style>