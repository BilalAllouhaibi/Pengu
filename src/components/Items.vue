<template>
  <div class="items">
      <slot name="info"></slot>
  </div>
</template>

<style>
.items {
  width: 80%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
  align-content: center;
  margin-left: 10em;
  margin-top: 5rem;

}
.items div{
  display: flex;
  flex-direction: column;
  width: 10em;
  height: 13em;
  margin: 1.4em ;
  padding: 1em;
  
}
.items img{
  width:10rem;
  margin-bottom: 1em;
  border-radius: 50%; 
  border-style:solid;
  border-width:1px;
  border-color:black;
  }
.items div img:hover{
cursor: pointer;
}
.items div img:active{
transform: scale(0.97);
}
.items div i{
 font-size: 85%;
 text-align: center;
 color: white;
}
@media only screen and (max-width: 1000px){
  .items div img{
  width:5rem;
}
.items div{
 width: 5rem;
 margin: 0.4em;
 overflow: hidden;
}
.items div i{
  font-size: 75%;
}
.items{
width: 100%;
margin-left: 0;
}
}
</style>