<template>

    <el-row :gutter="20" >

        <el-col :span="7" :name="B">
        <div class="grid-content bg-puerple-dark">
            <el-card class="box-card">
    <div v-for="o in 5" :key="o" class="text item">{{ 'Lado azul jugador ' + o }}</div>
  </el-card>
        </div>
        </el-col>
        <el-col :span="8" :offset="1" >
            <div>
      <el-button @click="$router.push('/')">volver</el-button>
  <router-view/>
            </div>  
        </el-col>
        <el-col :span="7" :offset="1" :name="R">
      <div class="grid-content bg-puerple-dark">
        <el-card class="box-card">
    <div v-for="o in 5" :key="o" class="text item">{{ 'Lado rojo jugador  ' + o }}</div>
  </el-card>
      </div>
        </el-col>
    </el-row>
  </template>
<script>

   
export default {
   name: 'ContentResult',
   props:{
   }
};
</script>

<style scoped>
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
label{ 
    border-style: solid;
}
.st{
    margin-bottom: 10px;
}
.el-row {
  margin-bottom: 20px;

}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  
}
div{
    margin-bottom: 10px;
    
}
.el-input {width:270px;
    margin-right: 5px;}
    .text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>