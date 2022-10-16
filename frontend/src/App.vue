<template>
  <div>
    <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderP></HeaderP>
      </el-header>
      <el-main>
     <MidP></MidP>
      </el-main>
      <el-main>

      <ContentP></ContentP>

      </el-main>
    </el-container>
  </div>
  </div>
</template>

<script>
import MidP from './components/Mid.vue'
import HeaderP from './components/Header.vue'
import ContentP from './components/Content.vue'

export default {
  name: 'App',
  components: {
    MidP,
    HeaderP,
    ContentP
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}

</style>
