<template>
    <div :span="0"               
        :style="{
          boxShadow: '--el-box-shadow-dark',
        }">
      <img style="width: 350px; height: 225px" src="@/assets/maps.jpg"/>
    </div>
</template>

<script>
export default {
    name: 'MidP',
    props:{
    }
};
</script>
<style scoped>
label{ 
    border-style: solid;
}
h3 {
  margin: 15px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  margin-bottom: 10px;
}
img{
  border-radius: 15%;
  
}
</style>