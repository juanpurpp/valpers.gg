<template>
    <div>
      <div class="common-layout">
      <el-container>
          <!--Parte superior de la pagina-->
        <el-header>
          <el-row :gutter="20" >
            <el-col :span="8">
            <img style="width: 100px; height: 100px" src="@/assets/logo.png"/>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <!--Nombre y imagen del mapa seleccionado-->
          <div :span="100" align="center">
            <h1>{{mapa}}</h1>
            <img style="width: 500px; height: 300px" :src='imagenMapa' />
          </div>
        </el-main>
        <el-main>
          <!--Boton para crear otra partica-->
          <el-button type="primary" color="#f5447e" @click="$router.push('/')">Crear una nueva partida</el-button>
  
        </el-main>
        <el-row gutter="2" justify="space-between" >
          <!--Nombre y rango de los equipos 1-->
        <el-col span :name="B">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <el-row>
                    <div>
                      <h1 align="right">EQUIPO 1</h1>
                        <p
                        v-show="meta.avgRankTeam2 !== -1 && meta.avgRankTeam2 != null"
                        style="color:#ccaaa9; font-size:12px;">
                          Rango medio: {{meta.avgRankTeam1}}
                          <img :src="meta.imgAvgRankTeam1" width="23" height="23">
                        </p>
                    </div>
                </el-row>
              </div>
            </template>
              <div v-for="(jugador,index) in jugadoresTeam1" :key="index">
                <el-row justify="end">
                  <el-col align="right" style="max-width:200px">
                    <label style="font-family: 'Helvetica Neue', sans-serif;color:#df4a64;max-width: 1px; font-size: 25px; border: 0px;">
                    {{jugador.name}}</label>
                  </el-col>
                  <el-col v-if="jugador.rank == null" align="right" style="max-width:150px">
                    <el-input
                      style="max-width: 123px"
                      class="w-30 m-2"
                      v-model="name" placeholder="No rank" disabled width="30">
                    </el-input>
                  </el-col>
                  <el-col v-else align="right" style="max-width:150px">
                    <img :src="jugador.imgrank" width="23" height="23"/>
                    <el-input
                      style="max-width: 100px"
                      class="w-30 m-2"
                      v-model="name" :placeholder="jugador.rank" disabled width="30">
                    </el-input>
                </el-col>
                </el-row>
              </div>
          </el-card>
          </el-col>
          <!--Nombre y rango de los equipos 2-->
          <el-col span :name="R">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <el-row justify="end">
                    <div>
                      <h1 align="right">EQUIPO 2</h1>
                      <p
                      v-show="meta.avgRankTeam2 !== -1 && meta.avgRankTeam2 != null"
                      style="color:#ccaaa9; font-size:12px;">
                          Rango medio: {{meta.avgRankTeam2}}
                          <img :src="meta.imgAvgRankTeam2" width="23" height="23" class="center"/>
                      </p>
                    </div>
                </el-row>
              </div>
            </template>
            <div v-for="(jugador,index) in jugadoresTeam2" :key="index">
              <el-row>
                <el-col v-if="jugador.rank == null" align="right" style="max-width:150px">
                  <el-input
                    style="max-width: 123px"
                    class="w-30 m-2"
                    v-model="name" placeholder="No rank" disabled width="30">
                  </el-input>
                </el-col>
                <el-col v-else align="right" style="max-width:150px">
                  <img :src="jugador.imgrank" width="23" height="23"/>
                  <el-input
                    style="max-width: 100px"
                    class="w-30 m-2"
                    v-model="name" :placeholder="jugador.rank" disabled width="30">
                  </el-input>
                </el-col>
                <el-col align="left" style="max-width:200px">
                  <label style="font-family: 'Helvetica Neue', sans-serif;color:#df4a64;max-width: 1px; font-size: 25px; border: 0px;">
                  {{jugador.name}}</label>
                </el-col>
              </el-row>
            </div>
          </el-card>
          </el-col>
          </el-row>
      </el-container>
      </div>
    </div>
  </template>
  
  <script>
  var Buffer = require('buffer/').Buffer
  import axios from 'axios'
  export default{
  async created(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log('param'+urlParams.get('id'))
    const currentid = urlParams.get('id')
    await axios
      .get('https://valpers-api.herokuapp.com/matchs',{
        params: {
          id: currentid
          }
        })
        .then(response =>{ 
          this.mapa  = response.data.map
          this.jugadoresTeam1 = response.data.team1.filter(p=>p.rank!=null).concat(response.data.team1.filter(p=>p.rank==null))
          this.jugadoresTeam2 = response.data.team2.filter(p=>p.rank!=null).concat(response.data.team2.filter(p=>p.rank==null))
          this.meta = response.data.meta
          this.imagenMapa = require('../assets/'+response.data.map.concat('.png').toLowerCase())
          console.log(this.match)
      })
    for(var j1 of this.jugadoresTeam1){
      let imgget = (await axios.get('https://valpers-api.herokuapp.com/ranks/image?name='+j1.rank.replace(' ','-'), {
        responseType: 'arraybuffer'
      }) ).data
      console.log('img let es' + imgget)
      j1.imgrank = Buffer.from(imgget, 'binary').toString('base64')
      j1.imgrank = 'data:image/png;base64, '+j1.imgrank
    }
    for(var j2 of this.jugadoresTeam2){
      let imgget = (await axios.get('https://valpers-api.herokuapp.com/ranks/image?name='+j2.rank.replace(' ','-'), {
        responseType: 'arraybuffer'
      }) ).data
      console.log('img let es' + imgget)
      j2.imgrank = Buffer.from(imgget, 'binary').toString('base64')
      j2.imgrank = 'data:image/png;base64, '+j2.imgrank
    }
    this.meta.imgAvgRankTeam1 = (await axios.get('https://valpers-api.herokuapp.com/ranks/image?name='+this.meta.avgRankTeam1.replace(' ','-'), {
        responseType: 'arraybuffer'
      }) ).data;
    this.meta.imgAvgRankTeam2 = (await axios.get('https://valpers-api.herokuapp.com/ranks/image?name='+this.meta.avgRankTeam2.replace(' ','-'), {
        responseType: 'arraybuffer'
      }) ).data;
     this.meta.imgAvgRankTeam1 = 'data:image/png;base64, ' + Buffer.from(this.meta.imgAvgRankTeam1, 'binary').toString('base64')
     this.meta.imgAvgRankTeam2 = 'data:image/png;base64, ' + Buffer.from(this.meta.imgAvgRankTeam2, 'binary').toString('base64')
    console.log('jugadoresTeam1')
    console.log(this.jugadoresTeam1)

  //Seleccion de imagen del mapa
  },

      data(){
        return{
          match: null,
          mapa: " ",
          imagenMapa: "",
          jugadoresTeam1:[],
          jugadoresTeam2:[],
          meta: {
            avgRankTeam1: null,
            avgRankTeam2: null
          }
        }
      },
  
  }
  </script>
  <script setup>

</script>
  <style>
  h1{
    width: fit-content;
    color:#f5447e;
    font-family: 'Microsoft YaHei', 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', '????', Arial, sans-serif;
  }
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
  .el-input{
    margin-left: 10px;
    margin-right: 10px;
  }
  .label{
    color:#f5447e;
  }
  .p{
    color:red;
    font-size:10;
  }
  
  </style>