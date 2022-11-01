<template>
  <!--Seleccion de mapa-->
  <el-select 
    v-model="valueMap"
    multiple
    default-first-option
    size="medium"
    placeholder="mapas"
    margin-bottom="0"
    margin-right="10000000"
    padding-right="2000"
    padding-bottom="0"
  >
    <el-option
      v-for="item in optionsMap"
      :key="item.name"
      
      :value="item.name"
    />
  </el-select>
  <el-checkbox v-model="valueBalance" label="Balancear equipos" size="default"/>

  <!--zona de inputs y seleccion de rango izquierda-->
    <el-row :gutter="20" >

        <el-col :span="7">
        <div class="grid-content bg-puerple-dark">
        <el-input type="text" v-model="inputJugador0" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango0" placeholder="Rango">
          <el-option-group
              v-for="group in optionsRango"
              :key="group.label"
              :label="group.label"
          >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
          </el-option-group>
        </el-select>
      
        <el-input v-model="inputJugador1" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango1" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>

        <el-input v-model="inputJugador2" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango2" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>

        <el-input v-model="inputJugador3" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango3" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>

        <el-input v-model="inputJugador4" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango4" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>
        </div>
        </el-col>
        <el-col :span="8" :offset="1" >

            <div>
              <el-button @click= "sendInfo()">guardar cambios</el-button>
              <!--Boton de envio de datos al backend y cambio de pagina-->
      <el-button @click= "sendInfo();$router.push( { path: '/game/', query: { id: currentid } }),4;">Start</el-button>
        <router-view/>
            </div>  
        </el-col>
          <!--zona de inputs y seleccion de rango derecha-->
        <el-col :span="7" :offset="1">
      <div class="grid-content bg-puerple-dark">

        <el-input v-model="inputJugador5" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango5" placeholder="Rango" width="100">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador6" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango6" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador7" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango7" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador8" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango8" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador9" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango9" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
          <el-option v-for="item in group.options" :key="item.value"  :value="item.value">
            <img :src="item.img" width="25" height="30"> {{ item.label }}
          </el-option>
         </el-option-group>
        </el-select>
      </div>
        </el-col>
    </el-row>
  </template>
  <script setup>
// add stylesheet

import { ref } from 'vue'
import axios from 'axios'
require('vue-select-image/dist/vue-select-image.css')
//valores de los inputs
const inputJugador0 = ref()
const inputJugador1 = ref()
const inputJugador2 = ref()
const inputJugador3 = ref()
const inputJugador4 = ref()
const inputJugador5 = ref()
const inputJugador6 = ref()
const inputJugador7 = ref()
const inputJugador8 = ref()
const inputJugador9 = ref()

//Valores del select de mapas
const valueMap = ref([])
const optionsMap = (await axios.get('http://localhost:3000/maps')).data
console.log('options maps es ')
console.log(optionsMap)
//valores de seleccion de rango
const valueBalance = ref()
const valueRango0 = ref()
const valueRango1 = ref()
const valueRango2 = ref()
const valueRango3 = ref()
const valueRango4 = ref()
const valueRango5 = ref()
const valueRango6 = ref()
const valueRango7 = ref()
const valueRango8 = ref()
const valueRango9 = ref()
const optionsRango = [
  {
    label: 'Hierro',
    options: [],
  },
  {
    label: 'Bronce',
    options: []
  },
  {
    label: 'Plata',
    options: [],
  },
  {
    label: 'Oro',
    options: [],
  },
  {
    label: 'Platino',
    options: [],
  },
  {
    label: 'Diamante',
    options: [],
  },
  {
    label: 'Ascendente',
    options: [],
  },
  {
    label: 'Inmortal',
    options: [],
  },
  {
    label: 'Radiante',
    options: [],
  },
]
  const ranks = await axios.get('http://localhost:3000/ranks')
  ranks.data.forEach(r=>{
    optionsRango.forEach(group=>{
      console.log('ruta '+ r.img)
      let newdata = {
        id: r.ID,
        img: require('./../../../backend/img/'+r.img),
        alt: r.name,
        value: r.name,
        label: r.name
      }
      if(group.label == r.name.substring(0,group.label.length)) group.options.push(newdata)
    })
    console.log(optionsRango)
  })
//Obtener una nueva id para trabajar
const currentid = (await axios.post('http://localhost:3000/matchs')).data.id
//Funcion asincrona de envio de datos con  metodo PUT
const sendInfo = async()=>{
  try {const resp = await axios
  .put('http://localhost:3000/matchs?choosemap=true&balance='+valueBalance.value,
    {
      id: currentid,
      map: valueMap.value,
      ready: false,
      team1:
      [
          {
              name: inputJugador0.value,
              rank: valueRango0.value
          },
          {
              name: inputJugador1.value,
              rank: valueRango1.value
          },
          {
              name: inputJugador2.value,
              rank: valueRango2.value
          },
          {
              name: inputJugador3.value,
              rank: valueRango3.value
          },
          {
              name: inputJugador4.value,
              rank: valueRango4.value
          },
      ],
      team2:
      [
          {
              name: inputJugador5.value,
              rank: valueRango5.value
          },
          {
              name: inputJugador6.value,
              rank: valueRango6.value
          },
          {
              name: inputJugador7.value,
              rank: valueRango7.value
          },
          {
              name: inputJugador8.value,
              rank: valueRango8.value
          },
          {
              name: inputJugador9.value,
              rank: valueRango9.value
          }
      ]
    }
  )
  console.log(resp.data)
  console.log("peticion realizada")
  }catch(err){
    console.error(err)
  }
}
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
    margin-bottom: 15px;
    
}
.el-input {
  width:200px;
  margin-right: 5px;}

.el-select .v-input_slot {
   padding-right: 0px;
   padding-bottom:0px;
   margin: 1px;
  }
.el-select {
    margin: 0 px;
    width: 130px;
}
.el-option{
  margin: 10px;
  padding: 0px 0px 0px 0px;
}
.el-checkbox{
    margin: 0 px;
    width: 0 px;
    padding-left:25px;
    padding-right: 0px;
    padding-bottom:0px;
}
</style>