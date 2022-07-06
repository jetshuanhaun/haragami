<script setup>




</script>

<template>
<div class="header-wrapper">
  <div class="header-left">
    <img src="../assets/img/header-img/music.png" alt="">
  </div>

  
  <div class="header-nav">
    <div>首页</div>
    hh
  </div>
</div>
<router-view></router-view>

</template>

<style scoped>

.header-wrapper{
  height: 65px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(71, 85, 85);
  display: inline-block;
}
.header-left{
  height: 100%;
  width: 300px;
  margin-left: 8px;
  background-image: url('../assets/img/header-img/logo.png');
  position: relative; 
  /* display: inline-block; */
  float: left;
}
.header-left img{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 60px;
  height: 30px;
  width: 30px;
   
}
/*nav*/
.header-nav{
  height: 100%;
  width: 300px;
  position: relative;
  background-color: bisque;
  float: left;
}

</style>
