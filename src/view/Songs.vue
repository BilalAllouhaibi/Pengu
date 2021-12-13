<template>
  <Box>
    <template v-slot:searchResult>
      <form @submit.prevent="searchSong">
      <input placeholder="sök på musik" v-model="searchTerm" type="search">
      </form>
    </template>
  </Box>
</template>

<script>
import Box from "../components/Box.vue"
export default {
components:{
  Box,
},
data(){
  return{
    searchTerm: "",
    Songs:[],
    Song:{},
  }
},
methods:{
  async searchSong(){
    console.log(this.searchTerm)
    await this.$store.dispatch("searchSong", this.searchTerm)
    this.Songs = this.$store.state.Songs
    console.log("-----------view--------")
    console.log(this.Songs)

  }
}
}
</script>

<style>
</style>