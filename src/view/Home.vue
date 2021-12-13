<template>
  <div class="home">
    <div class="homeButtons">
      <div class="buttonBox" id="songs">
        <button @click="$router.push('/Songs')">
          <img src="../assets/song.png" />
        </button>
        <a>Musik</a>
      </div>
      <div class="buttonBox" id="playlists">
        <button  @click="$router.push('/Playlists')">
          <img src="../assets/playlist.png" />
        </button>
        <a>Spellistor</a>
      </div>
      <div class="buttonBox" id="artists">
        <button  @click="$router.push('/Artists')">
          <img src="../assets/artist.png" />
        </button>
        <a>Artister</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.homeButtons {
  display: flex;
  margin: 5em;
  justify-content: space-around;
box-shadow: inset 0px 1px 27px 7px rgb(0, 0, 0);
padding: 4%;
 border-radius: 100px;
 background-image: url("../assets/grill.jpg");
} 
.homeButtons button img {
  width: 50vh;
  border: solid;
  border-radius: 100px;
  box-shadow: 5px 3px 17px 5px rgba(255, 153, 0, 0.623);
  background: rgb(255, 225, 91);
}
.homeButtons button :hover{
 transform: scale(1.02);
 cursor: pointer;
}
.buttonBox{
display: flex;
flex-direction: column;

}
.homeButtons a{
font-weight: bold;
text-align: center;
text-transform:uppercase ;
color: #ceeefd;
}
@media only screen and (max-width: 600px){
  .homeButtons{
    flex-direction: column;
  }
  .homeButtons button img {
    width: 50vw;
  }
}

</style>