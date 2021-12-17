<template>
  <div class="musicPlayer">
    <div class="content">
      <div class="info">
        <slot name="info"></slot>
      </div>
      <hr>
      <div class="buttons">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPlayer",
  emits: ["close"],
}
</script>

<style>
.musicPlayer {
  margin: 1em;
  position: fixed;
  bottom: 0;
  right: 0;
  display: grid;
   display:inline-block;
}
.content {
  background: rgba(255, 123, 0, 0.904);
  border-radius: 1em;
  padding: 1em;
  height: 10em;
  width: 30em;
}
#closemusicPlayer{
  float:right ;
}
.info{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 
}
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.info .imgPlaying{
  animation: rotate 1s linear infinite;
}
.info img{
  width: 5em;
  border: solid;
  border-radius: 50%;
  cursor: pointer
  
}
.info a:hover{
direction: rtl;
transition: 10s;
}
.buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}
.buttons button i {
  font-size: 1.7rem;
  cursor: pointer
}
.buttons input[type='range']{
   -webkit-appearance: none;
   height: 0.5em;
   margin-top: 1em;
      background-color: black;
      border-radius: 1em;
}
.buttons input[type='range']::-webkit-slider-thumb {
      width: 2.5em;
      -webkit-appearance: none;
      height: 2.5em;
      border-radius: 50%;
      background-image: url("../assets/penguin.png");
      background-size: 2.5em 2.5em;
      cursor:grabbing;
    }
    .buttons a{
      font-size: 0.5em
    }


</style>