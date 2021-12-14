<template>
  <div class="musicPlayer">
    
    <div class="content">
      <button id="closemusicPlayer" @click="$emit('close')">
        <i class="fas fa-times"></i>
      </button>
      <br>
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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
  border-radius: 100%;
  
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
}
</style>