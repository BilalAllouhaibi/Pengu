<template>
  <div class="box">
      <slot name="searchResult"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box form input {
    border-style: none;
    border-bottom-style: solid;
    margin-left: 40%;
    width: 35vw;
}
</style>