<template>

  <div>
    <button @mouseover="homeButtons = true" @mouseleave="homeButtons = false" @click="$router.push('/')">
      <img id="penguin" src="./assets/penguin.png" />
    </button>
    <div @mouseover="homeButtons = true" @mouseleave="homeButtons = false"    v-show="homeButtons" class="homeButtons">
      <button id="song" @click="$router.push('/Songs')">
        <img src="./assets/song.png" />
      </button>

      <button id="playlist" @click="$router.push('/Playlists')">
        <img src="./assets/playlist.png" />
      </button>

      <button id="artist" @click="$router.push('/Artists')">
        <img src="./assets/artist.png" />
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data(){
    return{
      homeButtons: false,
          }
  },
};
</script>

<style scoped>
#penguin {
  width: 4em;
  position: absolute;
  margin-left: 1%;
}

div button :hover {

  transform: scale(1.1);
  cursor: pointer;
   transform: rotate(-45deg);
}
.homeButtons{
  display: flex;
  flex-direction: column;
  width: 6vw;
  position: absolute;
  justify-content: space-between;
  margin-left: 3vw;
  transform: rotate(45deg)
}
.homeButtons button{
  width: 2.5em;
}
.homeButtons button img{
  width: 2.5em;
 
}
 #playlist{
    margin-left: 1.6vw;
  }

</style>
