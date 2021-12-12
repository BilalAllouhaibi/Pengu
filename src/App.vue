<template>
<div >
  <button @click="$router.push('/')"><img id="penguin" src="./assets/penguin.png"/></button>
  <router-view></router-view>
</div>

  


</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

#penguin{
width: 4em;
position: absolute;
margin-left: 1%;
}
div button :hover{
  transform: scale(1.1);
  cursor: pointer;
}
</style>
