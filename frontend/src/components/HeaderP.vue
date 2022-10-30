<template> 
  <el-row :gutter="20" >
    <el-col :span="8">
      <img style="width: 100px; height: 100px" src="@/assets/logo.png"/>
    </el-col>
   <el-col :span="8" :offset="8">
    <div class="grid-content bg-puerple-dark">
      <!--<el-button >Filtros</el-button>-->
    </div>
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

</style>