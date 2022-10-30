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
        <el-row :gutter="12" >
    <el-col :span="7" :offset="2" :name="B">
   
      <h1>equipo 1</h1>
          <el-card class="box-card">
              <h1 v-for="(jugador, index) in jugadoresTeam1" :key="index">{{jugador.name}} ||| {{jugador.rank}}</h1>
          </el-card>
    </el-col>
  
    <el-col :span="7" :offset="7" :name="R">
      <h1>equipo 2</h1>
          <el-card class="box-card">
            <h1 v-for="(jugador, index) in jugadoresTeam2" :key="index">{{jugador.name}} ||| {{jugador.rank}}</h1>
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
   async created(){
  
      await axios
      .get('http://localhost:3000/matchs',{
        params: {
          id: 1
        }
      })
      .then(response =>{ 
        this.match = response.data
        console.log(this.match)
        this.mapa  = response.data.map
        //Ingreso de datos Equipo 1
        for (let index = 0; index < response.data.team1.length; index++) {
          this.jugadoresTeam1[index]  = response.data.team1[index];
          console.log(this.jugadoresTeam1[index])
        }
        //Ingreso de datos Equipo 1
        //Ingreso de datos Equipo 2
        for (let index = 0; index < response.data.team2.length; index++) {
          this.jugadoresTeam2[index]  = response.data.team2[index];
          console.log(this.jugadoresTeam2[index])
      }
        //Ingreso de datos Equipo 2
    })
  
    },
      data(){
        return{
          match: null,
          mapa: " ",
          jugadoresTeam1:[],
          jugadoresTeam2:[],
        }
      },
  
  }
  </script>
  <style>
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
  .text {
    font-size: 14px;
  }
  
  .item {
    padding: 18px 0;
  }
  
  .box-card {
    width: 480px;
  }
  .alignment-container {
    width: 240px;
    margin-bottom: 20px;
    padding: 8px;
    border: 1px solid var(--el-border-color);
  }
  </style>