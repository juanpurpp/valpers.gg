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
          <h1>{{mapa}}</h1>
      <img style="width: 500px; height: 300px" src="@/assets/maps.jpg"/> 
       
    </div>
      </el-main>
      <el-main>

        <el-button @click="$router.push('/')">volver</el-button>

      </el-main>
      <el-row :gutter="20" >
      <el-col :span="7" :offset="2" :name="B">
        <h1>equipo 1</h1>
        <el-card class="box-card">
          <h2>{{nombre1}}</h2> <h2>{{rank1}}</h2>
          <h2>{{nombre2}}</h2> <h2>{{rank2}}</h2>
          <h2>{{nombre3}}</h2> <h2>{{rank3}}</h2>
          <h2>{{nombre4}}</h2> <h2>{{rank4}}</h2>
          <h2>{{nombre5}}</h2> <h2>{{rank5}}</h2>
        </el-card>
      </el-col>
      <el-col :span="7" :offset="7" :name="R">
        <h1>equipo 2</h1>
        <el-card class="box-card">
          <h2>{{nombre6}}</h2> <h2>{{rank6}}</h2>
          <h2>{{nombre7}}</h2> <h2>{{rank7}}</h2>
          <h2>{{nombre8}}</h2> <h2>{{rank8}}</h2>
          <h2>{{nombre9}}</h2> <h2>{{rank9}}</h2>
          <h2>{{nombre10}}</h2> <h2>{{rank10}}</h2>
        </el-card>
      </el-col>
    </el-row>
    </el-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default{
  mounted(){
    axios
    .get('http://localhost:3000/matchs?id=1')
    .then(response =>{ 
      this.match = response.data[1]
      this.mapa = response.data[1].map

      this.nombre1 = response.data[1].team1[0].name
      this.nombre2 = response.data[1].team1[1].name
      this.nombre3 = response.data[1].team1[2].name
      this.nombre4 = response.data[1].team1[3].name
      this.nombre5 = response.data[1].team1[4].name

      this.rank1 = response.data[1].team1[0].rank
      this.rank2 = response.data[1].team1[1].rank
      this.rank3 = response.data[1].team1[2].rank
      this.rank4 = response.data[1].team1[3].rank
      this.rank5 = response.data[1].team1[4].rank

      this.nombre6 = response.data[1].team2[0].name
      this.nombre7 = response.data[1].team2[1].name
      this.nombre8 = response.data[1].team2[2].name
      this.nombre9 = response.data[1].team2[3].name
      this.nombre10 = response.data[1].team2[4].name

      this.rank6 = response.data[1].team2[0].rank
      this.rank7 = response.data[1].team2[1].rank
      this.rank8 = response.data[1].team2[2].rank
      this.rank9 = response.data[1].team2[3].rank
      this.rank10 = response.data[1].team2[4].rank

      console.log("hola")    
      console.log("se envio la solicitud", response.data[1])
    console.log("match",this.match.team1[2].name) 
    console.log("match",this.match.team1[4].name) 
  })
  },
    data(){
      return{
        match: null,
        mapa: " ",

        nombre1: " ",
        rank1:" ",
        nombre2: " ",
        rank2:" ",
        nombre3: " ",
        rank3:" ",
        nombre4: " ",
        rank4:" ",
        nombre5: " ",
        rank5:" ",
        nombre6: " ",
        rank6:" ",
        nombre7: " ",
        rank7:" ",
        nombre8: " ",
        rank8:" ",
        nombre9: " ",
        rank9:" ",
        nombre10: " ",
        rank10:" "
      }
    },
}
</script>
<style>
</style>