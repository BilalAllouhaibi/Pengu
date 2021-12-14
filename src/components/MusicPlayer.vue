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

<style scoped>
.musicPlayer {
  margin: 1em;
  position: fixed;
  bottom: 0;
  right: 0;
  display: grid;
}
.content {
  background: rgba(255, 123, 0, 0.904);
  border-radius: 1em;
  padding: 1em;
  height: 7em;
  width: 30em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
#closemusicPlayer{
  float:right ;
}
</style>