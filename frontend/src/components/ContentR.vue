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
              <h1>EQUIPO 1</h1>
              </div>
            </template>
              <div v-for="(jugador,index) in jugadoresTeam1" :key="index">
                <el-row justify="end">
                  <el-col align="right" style="max-width:200px">
                    <label style="font-family: 'Helvetica Neue', sans-serif;color:#df4a64;max-width: 1px; font-size: 25px; border: 0px;">
                    {{jugador.name}}</label>
                  </el-col>
                  <el-col align="right" style="max-width:150px">
                  <img :src="jugador.imgrank" width="23" height="23">
                    <el-input style="max-width: 100px" class="w-30 m-2" type="text" id="name" name="name" v-model="name" :placeholder="jugador.rank" disabled width="30">
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
              <el-row justify="end">
                <div class="card-header">
                  <h1 align="right">EQUIPO 2</h1>
                </div>
              </el-row>
            </template>
            <div v-for="(jugador,index) in jugadoresTeam2" :key="index">
              <el-row>
                <el-col align="left" style="max-width:150px">
                  <el-input style="max-width: 100px" class="w-30 m-2" type="text" id="name" name="name" v-model="name" :placeholder="jugador.rank" disabled width="30">
                  </el-input>
                  <img :src="jugador.imgrank" width="23" height="23">
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
      .get('http://localhost:3000/matchs',{
        params: {
          id: currentid
          }
        })
        .then(response =>{ 
          this.match = response.data
          console.log(this.match)
          this.mapa  = response.data.map
          //Ingreso de datos Equipo 1
          this.jugadoresTeam1 = response.data.team1
          this.jugadoresTeam2 = response.data.team2
          //Ingreso de datos Equipo 1
          //Ingreso de datos Equipo 2
          //Ingreso de datos Equipo 2
      })
  for(var j1 of this.jugadoresTeam1){
    let imgget = (await axios.get('http://localhost:3000/ranks/image?name='+j1.rank.replace(' ','-'), {
      responseType: 'arraybuffer'
    }) ).data
    console.log('img let es' + imgget)
    j1.imgrank = Buffer.from(imgget, 'binary').toString('base64')
    j1.imgrank = 'data:image/png;base64, '+j1.imgrank
  }
  for(var j2 of this.jugadoresTeam2){
    let imgget = (await axios.get('http://localhost:3000/ranks/image?name='+j2.rank.replace(' ','-'), {
      responseType: 'arraybuffer'
    }) ).data
    console.log('img let es' + imgget)
    j2.imgrank = Buffer.from(imgget, 'binary').toString('base64')
    j2.imgrank = 'data:image/png;base64, '+j2.imgrank
  }
  console.log('jugadoresTeam1')
  console.log(this.jugadoresTeam1)
  //Seleccion de imagen del mapa
      switch (this.mapa) {
            case "Icebox": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltde02911a015d7ef9/5f80d2851f5f6d4173b4e49d/Icebox_transparentbg_for_Web.png'
            break;
            case "Bind": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8538036a309525ae/5ebc470bfd85ad7411ce6b50/bind-featured.png'
            break;
            case "Haven": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8afb5b8145f5e9b2/5ebc46f7b8c49976b71c0bc5/haven-featured.png'
            break;
            case "Split": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd188c023f88f7d91/5ebc46db20f7727335261fcd/split-featured.png'
            break;
            case "Ascent": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta9b912e1a1b59aa4/5ebc471cfa550001f72bcb13/ascent-featured.png'
            break;           
            case "Pearl": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd0a2437fb09ebde4/62a2805b58931557ed9f7c9e/PearlLoadingScreen_MapFeaturedImage_930x522.png'
            break;
            case "Fracture": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4485163c8c5873c/6131b23e9db95e7ff74b6393/Valorant_FRACTURE_Minimap_Alpha_web.png'
            break;
            case "Breeze": this.imagenMapa ='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb03d2e4867f2e324/607f995892f0063e5c0711bd/breeze-featured_v1.png'
            break;
            default:   this.imagenMapa='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb03d2e4867f2e324/607f995892f0063e5c0711bd/breeze-featured_v1.png'

              break;
          }
        
    },

      data(){
        return{
          match: null,
          mapa: " ",
          imagenMapa: "",
          jugadoresTeam1:[],
          jugadoresTeam2:[],
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
  </style>