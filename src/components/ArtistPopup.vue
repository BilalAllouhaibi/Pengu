<template>
  <div class="artistPopup" @click="$emit('close')">
    <div class="artistContent">
      <div class="artistInfo">
        <slot name="info"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistPopup",
  emits: ["close"],
}
</script>

<style>
.artistPopup {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.575);
}
.artistContent {
  background: rgba(255, 123, 0, 0.904);
  border-radius: 1rem;
  padding: 1em;
  height: 30em;
  width: 30em;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.artistInfo {
  display: flex;
  }
 .artistInfo img{
  width: 5em;
  height: 5em;
  border: solid;
  border-radius: 50%;
  cursor: pointer
}
@media only screen and (max-width: 1050px){
    .artistContent{
        height:30em;
        width:15em
    }
}


</style>