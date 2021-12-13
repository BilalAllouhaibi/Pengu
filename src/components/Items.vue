<template>
  <div class="items">
      <slot name="info"></slot>
  </div>
</template>

<style>
.items {
  width: 60%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
  align-content: center;
  margin-left: 25%;
  margin-top: 5rem;

}
.items div{
  display: flex;
  flex-direction: column;

  width: 7em;
  background-color: rgb(54, 54, 54);
  
  margin: 1.5em ;
  padding: 1em;
  border-radius: 3em;
  
}
.items div img{
  width:7rem;
  border-radius: 100px;
}
.items div i{
 font-size: 85%;
 text-align: center;
 color: white;
}
</style>