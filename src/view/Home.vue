<template>
  <div class="home">
    <div class="homeButtons">
      <div class="box" id="songs">
        <button @click="$router.push('/Songs')">
          <img src="../assets/song.png" />
        </button>
        <a>Musik</a>
      </div>
      <div class="box" id="playlists">
        <button  @click="$router.push('/Playlists')">
          <img src="../assets/playlist.png" />
        </button>
        <a>Spellistor</a>
      </div>
      <div class="box" id="artists">
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

<style>

.homeButtons {
  display: flex;
  margin: 5em;
  justify-content: space-around;
box-shadow: inset 0px 1px 27px 7px rgba(0,0,0,0.54);
padding: 4%;
 border-radius: 100px;
} 
.homeButtons button img {
  width: 50vh;
  border: solid;
  border-radius: 100px;
  box-shadow: 5px 3px 17px 5px rgba(255, 206, 116, 0.822);
  background: rgba(255, 253, 145, 0.753);
}
.homeButtons button :hover{
 transform: scale(1.02);
 cursor: pointer;
}
.box{
display: flex;
flex-direction: column;

}
.homeButtons a{
font-weight: bold;
text-align: center;
text-transform:uppercase ;
}

</style>