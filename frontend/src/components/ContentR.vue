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
          <div :span="100">
            <h1>{{mapa}}</h1>
     <img style="width: 500px; height: 300px" :src='imagenMapa' />
      </div>
        </el-main>
        <el-main>
          <!--Boton para crear otra partica-->
          <el-button @click="$router.push('/')">Crear una nueva partida</el-button>
  
        </el-main>
        <el-row :gutter="12" >
          <!--Nombre y rango de los equipos 1-->
    <el-col :span="7" :offset="2" :name="B">
   
      <h1>equipo 1</h1>
          <el-card class="box-card">
              <h1 v-for="(jugador, index) in jugadoresTeam1" :key="index">{{jugador.name}}    |||    {{jugador.rank}}</h1>
          </el-card>
    </el-col>
          <!--Nombre y rango de los equipos 2-->
    <el-col :span="7" :offset="7" :name="R">
      <h1>equipo 2</h1>
          <el-card class="box-card">
            <h1 v-for="(jugador, index) in jugadoresTeam2" :key="index">{{jugador.name}}    |||    {{jugador.rank}}</h1>
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