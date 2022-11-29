<template> 
  <!--Parte superior de la pagina-->
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6">
        <img style="width: 247px; height: 70px" src="@/assets/logo.png"/>
      </el-col>
      <el-col :span="6">
          <el-button type="primary" color="#f5447e" @click="$router.push('/login')">Login</el-button>
      </el-col>
    </el-row>
  </template>

<script>
export default {
    name: 'HeaderP',
    props:{
    }
};
</script>


<style>
  body {
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        /* bottom, image */
        url(../assets/backg.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
h3 {
  margin: 0px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 5px;
}
a {
  color: #42b983;
}
label{ 
    border-style: solid;
}

.el-row {
  margin-bottom: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 15px;
}

</style>