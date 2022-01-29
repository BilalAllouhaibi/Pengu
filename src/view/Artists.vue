<template>
  <div>
    <Box>
      <template v-slot:searchBar>
        <form @submit.prevent="searchArtist">
          <input
            placeholder="sök på artister"
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
              v-for="artist in this.$store.state.artists.content"
              v-bind:key="artist.id"
            >
              <img
                @click="goToArtistPage(artist)"
                v-bind:src="artist.thumbnails[1].url"
              />
              <i>{{ artist.name }}</i>
            </div>
            <i v-if="this.$store.state.artists.content?.length === 0"
              >cant find a result for "{{ this.$route.query.results }}"</i
            >
          </template>
        </Items>
      </template>
    </Box>
    <ArtistPopup v-show="artistPopup" @close="artistPopup = false">
      <template v-slot:info>
        <div v-if="this.$store.state.artist">
          <img v-bind:src="this.$store.state.artist.thumbnails[1].url" />
          <h3>{{this.$store.state.artist.description}}</h3>  
          <button @click="copyToClipBoard"><i class="fas fa-clipboard"></i></button>
            <input v-model="textToCopy" type="text" id="textToCopy"/>
            </div>
      </template>
    </ArtistPopup>
  </div>
</template>

<script>
import router from "../router/router.js";
import Box from "../components/Box.vue";
import Items from "../components/Items.vue";
import ArtistPopup from "../components/ArtistPopup.vue";
export default {
  components: {
    Box,
    Items,
    ArtistPopup,
  },
  data() {
    return {
      artistId: this.$route.params.results,
      searchTerm: this.$route.query.results,
      artistPopup: false,
      textToCopy:"",
    
    };
  },

  methods: {
  copyToClipBoard() {
  navigator.clipboard.writeText(this.textToCopy);
  alert("Copied the text: " + this.textToCopy);
  },
    async searchArtist() {
      console.log("-----------view--------");
      console.log(this.searchTerm);
      await this.$store.dispatch("searchArtist", this.searchTerm);
      router.push({
        name: "Artists",
        query: { results: `${this.searchTerm}` },
      });
    },
  async goToArtistPage(artist) {
      console.log(artist.browseId);
      await this.$store.dispatch("getArtistById", artist.browseId);
      router.push({
        name: "Artist",
        params: { results: `${artist.browseId}` },
      });
      this.textToCopy = `http://localhost:8080/Artists/${artist.browseId}`
      console.log("texttoCOPPPYYY" + this.textToCopy)
      this.artistPopup = true;
    },
  },
  async created() {
    console.log(this.$route);
    if (this.artistId) {
       await this.$store.dispatch("getArtistById", this.artistId);
       await this.$store.dispatch("searchArtist", this.artistId);
       this.textToCopy =  `http://localhost:8080/Artists/${this.artistId}`
      console.log(this.$store.state.artist)
      this.artistPopup = true;
    } else if (this.searchTerm) {
      console.log(this.searchTerm);
      await this.$store.dispatch("searchArtist", this.searchTerm);
    }
  },
};
</script>

<style>
</style>



