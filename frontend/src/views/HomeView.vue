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
import MidP from '../components/MidP.vue'
import HeaderP from '../components/HeaderP.vue'
import ContentP from '../components/ContentP.vue'
export default {
  name: 'HomeView',
  components: {
    ContentP,
    MidP,
    HeaderP
  },
}
</script>
