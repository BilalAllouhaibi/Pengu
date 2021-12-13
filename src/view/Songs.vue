<template>
  <Box>
    <template v-slot:searchResult>
      <form @submit.prevent="searchMusic">
      <input placeholder="sök på musik" v-model="searchResult" type="search">
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
    searchResult: "",
  }
},
methods:{
  searchMusic(){
    console.log(this.searchResult)
  }
}
}
</script>

<style>
</style>