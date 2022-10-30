<template>
  <el-select 
    v-model="valueMap"
    multiple
    default-first-option
    size="large"
    placeholder="mapas"
  >
    <el-option
      v-for="item in optionsMap"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
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
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
      
        <el-input v-model="inputJugador1" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango1" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>

        <el-input v-model="inputJugador2" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango2" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>

        <el-input v-model="inputJugador3" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango3" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>

        <el-input v-model="inputJugador4" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango4" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
        </div>
        </el-col>
        <el-col :span="8" :offset="1" >

            <div>
              <el-button @click= "sendInfo()">guardar cambios</el-button>
              <!--Boton de envio de datos al backend y cambio de pagina-->
      <el-button @click= "$router.push('game'),4;sendInfo()">Start</el-button>
        <router-view/>
            </div>  
        </el-col>
        <el-col :span="7" :offset="1">
      <div class="grid-content bg-puerple-dark">

        <el-input v-model="inputJugador5" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango5" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador6" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango6" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador7" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango7" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador8" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango8" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
        <el-input v-model="inputJugador9" placeholder="Nombre de jugador" />
        <el-select v-model="valueRango9" placeholder="Rango">
        <el-option-group
            v-for="group in optionsRango"
            :key="group.label"
            :label="group.label"
        >
        <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
         </el-option-group>
        </el-select>
      </div>
        </el-col>
    </el-row>
  </template>
  <script setup>
import { ref } from 'vue'
import axios from 'axios'

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
const optionsMap = [
{
  value:'Ascent',
  label:'Ascent'
},
{
  value:'Bind',
  label:'Bind'
},
{
  value:'Breeze',
  label:'Breeze'
},
{
  value:'Fracture',
  label:'Fracture'
},
{
  value:'Haven',
  label:'Haven'
},
{
  value:'Icebox',
  label:'Icebox'
},
{
  value:'Pearl',
  label:'Pearl'
},
{
  value:'Split',
  label:'Split'
}
]
//select rango

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
    options: [
      {
        value: 'Hierro 1',
        label: 'Hierro 1',
      },
      {
        value: 'Hierro 2',
        label: 'Hierro 2',
      },
      {
        value: 'Hierro 3',
        label: 'Hierro 3',
      },
    ],
  },
  {
    label: 'Bronce',
    options: [
      {
        value: 'Bronce 1',
        label: 'Bronce 1',
      },
      {
        value: 'Bronce 2',
        label: 'Bronce 2',
      },
      {
        value: 'Bronce 3',
        label: 'Bronce 3',
      },

    ],
  },
  {
    label: 'plata',
    options: [
      {
        value: 'plata 1',
        label: 'plata 1',
      },
      {
        value: 'plata 2',
        label: 'plata 2',
      },
      {
        value: 'plata 3',
        label: 'plata 3',
      },

    ],
  },
  {
    label: 'Oro',
    options: [
      {
        value: 'Oro 1',
        label: 'Oro 1',
      },
      {
        value: 'Oro 2',
        label: 'Oro 2',
      },
      {
        value: 'Oro 3',
        label: 'Oro 3',
      },

    ],
  },
  {
    label: 'Platino',
    options: [
      {
        value: 'Platino 1',
        label: 'Platino 1',
      },
      {
        value: 'Platino 2',
        label: 'Platino 2',
      },
      {
        value: 'Platino 3',
        label: 'Platino 3',
      },
    ],
  },
  {
    label: 'Diamante',
    options: [
      {
        value: 'Diamante 1',
        label: 'Diamante 1',
      },
      {
        value: 'Diamante 2',
        label: 'Diamante 2',
      },
      {
        value: 'Diamante 3',
        label: 'Diamante 3',
      },
    ],
  },
  {
    label: 'Ascendente',
    options: [
      {
        value: 'Ascendente 1',
        label: 'Ascendente 1',
      },
      {
        value: 'Ascendente 2',
        label: 'Ascendente 2',
      },
      {
        value: 'Ascendente 3',
        label: 'Ascendente 3',
      },

    ],
  },
  {
    label: 'Inmortal',
    options: [
      {
        value: 'Inmortal 1',
        label: 'Inmortal 1',
      },
      {
        value: 'Inmortal 2',
        label: 'Inmortal 2',
      },
      {
        value: 'Inmortal 3',
        label: 'Inmortal 3',
      },

    ],
  },
  {
    label: 'Radiante',
    options: [
      {
        value: 'Radiante',
        label: 'Radiante',
      },
    ],
  },
]


//Funcion asincrona de envio de datos con  metodo PUT
const sendInfo = async()=>{
  try {const resp = await axios
.put('http://localhost:3000/matchs?choosemap=true&balance=true',
{
  id: 1,
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
label{ 
    border-style: solid;
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
    margin-bottom: 50px;
    
}
.el-input {width:270px;
    margin-right: 5px;}

    .select .v-input__slot {
   padding-right: 4px
  }
</style>