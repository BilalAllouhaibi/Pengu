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
                v-bind:src="artist.thumbnails[1].url"
              />
              <i>{{ artist.name }}</i>
            </div>
            <i v-if="this.$store.state.artists.content?.length === 0">cant find a result for "{{this.$route.query.results}}"</i>
      
           
          </template>
        </Items>
      </template>
    </Box>
  </div>
</template>

<script>
import router from "../router/router.js"
import Box from "../components/Box.vue";
import Items from "../components/Items.vue";
export default {
components:{
  Box,Items
},
data(){
  return {
    searchTerm: this.$route.query.results,
  }
},

methods:{
  async searchArtist() {
      console.log("-----------view--------");
      console.log(this.searchTerm); 
      await this.$store.dispatch("searchArtist", this.searchTerm);
     router.push({name:'Artists', query:{results: `${this.searchTerm}`}})
    },
},
async created(){
    if(this.$route.query.results) await this.$store.dispatch("searchArtist", this.searchTerm);
}
}
</script>

<style>

</style>



