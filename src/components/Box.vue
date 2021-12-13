<template>
  <div class="box">
      <slot name="searchBar"></slot>
  </div>
</template>


<style>
.box input {
    border-style: none;
    border-bottom-style: solid;
    margin-left: 30%;
    width: 35vw;
}

</style>