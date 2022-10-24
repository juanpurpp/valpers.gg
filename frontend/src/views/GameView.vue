<template>

  <div>
    <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20" >
    <el-col :span="8">
      <img style="width: 100px; height: 100px" src="@/assets/logo.png"/>
    </el-col>
  </el-row>
      </el-header>
      <el-main>
        <div :span="100">
      <img style="width: 500px; height: 300px" src="@/assets/maps.jpg"/>
       
    </div>
      </el-main>
      <el-main>
        <ContentResult></ContentResult>

      </el-main>
    </el-container>
  </div>
  </div>
</template>
<script>
import ContentResult from '../components/ContentResult.vue'
export default {
  name: 'HomeView',
  components: {
    ContentResult
  }
}
</script>
<style>
</style>