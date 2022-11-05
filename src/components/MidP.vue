<template>

    <div :span="100"               
        :style="{
          boxShadow: '--el-box-shadow-dark',
        }">
      <img style="width: 500px; height: 300px" src="@/assets/maps.jpg"/>
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
  margin: 40px 0 0;
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
  margin-bottom: 20px;
}
img{
  border-radius: 15%;
  
}
</style>