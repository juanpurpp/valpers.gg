<template><div>
  <!--Seleccion de mapa-->
  <el-row gutter="15" justify="center">
    <el-col span>
      <div>
              <el-button type="primary" color="#f5447e" @click= "sendInfo(true);">Start</el-button>
              <router-view/>     
            </div>  
      
    </el-col><el-col span>
      <el-switch
        v-model="valueBalance"
        class="ml-2"
        style="--el-switch-on-color: #f5447e; --el-switch-off-color: #B5B2B2"
        active-text="Balancear equipos"
        active-color="--el-switch-on-color: #f5447e; --el-switch-off-color: #B5B2B2"
        @change = "sendInfo()"
      />
    </el-col>
  </el-row>
</div>
  <!--zona de inputs y seleccion de rango izquierda-->
    <el-row :gutter="15" >
        <el-col :span="7">
        <div class="grid-content bg-puerple-dark">
        <el-input type="text" v-model="inputJugador0" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
          <el-select v-model="valueRango0" :disabled="(inputJugador0=='')" placeholder="Rango"  @change = "sendInfo()">
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
      
        <el-input v-model="inputJugador1" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango1" :disabled="(inputJugador1=='')" placeholder="Rango"  @change = "sendInfo()">
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

        <el-input v-model="inputJugador2" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango2" :disabled="(inputJugador2=='')" placeholder="Rango"  @change = "sendInfo()">
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

        <el-input v-model="inputJugador3" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango3" :disabled="(inputJugador3=='')" placeholder="Rango"  @change = "sendInfo()">
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

        <el-input v-model="inputJugador4" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango4" :disabled="(inputJugador4=='')" placeholder="Rango"  @change = "sendInfo()">
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
        <!--checkboxes mapas-->
        <el-col :span="8" :offset="1" >
          <div class="check-button-style">  
            <el-checkbox-group v-model="valueMap" :min="1" @change="sendInfo()"  fill="#f5447e">
              <el-checkbox-button v-for="map in optionsMap" checked="true" :key="map.name" :label="map.name">
                {{ map.name }}
              </el-checkbox-button >
            </el-checkbox-group>
          </div>
          <div style="margin:50px">
            <label id="error"></label>
          </div>

        </el-col>
        <!--checkboxes mapa-->
        <!--zona de inputs y seleccion de rango derecha-->
        <el-col :span="7" :offset="1">
      <div class="grid-content bg-puerple-dark">

        <el-input v-model="inputJugador5" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango5" :disabled="(inputJugador5=='')" placeholder="Rango"  @change = "sendInfo()" width="100">
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
        <el-input v-model="inputJugador6" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango6" :disabled="(inputJugador6=='')" placeholder="Rango"  @change = "sendInfo()">
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
        <el-input v-model="inputJugador7" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango7" :disabled="(inputJugador7=='')" placeholder="Rango"  @change = "sendInfo()">
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
        <el-input v-model="inputJugador8" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango8" :disabled="(inputJugador8=='')" placeholder="Rango"  @change = "sendInfo()">
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
        <el-input v-model="inputJugador9" show-word-limit maxlength="16" placeholder="Nombre de jugador"  @input = "sendInfo()"/>
        <el-select v-model="valueRango9" :disabled="(inputJugador9=='')" placeholder="Rango"  @change = "sendInfo()">
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
import router from '../router'
//valores de los inputs
const inputJugador0 = ref('')
const inputJugador1 = ref('')
const inputJugador2 = ref('')
const inputJugador3 = ref('')
const inputJugador4 = ref('')
const inputJugador5 = ref('')
const inputJugador6 = ref('')
const inputJugador7 = ref('')
const inputJugador8 = ref('')
const inputJugador9 = ref('')

//Valores del checkbox de mapas
const valueMap = ref(['Ascent'])
const optionsMap = (await axios.get('https://valpers-api.herokuapp.com/maps')).data
console.log('options maps es ')
console.log(optionsMap)
//valores de seleccion de rango

const valueBalance = ref(true)

const valueRango0 = ref('Unranked')
const valueRango1 = ref('Unranked')
const valueRango2 = ref('Unranked')
const valueRango3 = ref('Unranked')
const valueRango4 = ref('Unranked')
const valueRango5 = ref('Unranked')
const valueRango6 = ref('Unranked')
const valueRango7 = ref('Unranked')
const valueRango8 = ref('Unranked')
const valueRango9 = ref('Unranked')
const optionsRango = [
  {
    label: 'Unranked',
    options: []
  },
  {
    label: 'Hierro',
    options: []
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
  const ranks = await axios.get('https://valpers-api.herokuapp.com/ranks')
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
//Funcion asincrona de envio de datos con  metodo PUT
var currentid=-1
const sendInfo = async(redirect = false)=>{
  const jugadorinput = new Array(10);
  jugadorinput[0] = inputJugador0.value
  jugadorinput[1] = inputJugador1.value
  jugadorinput[2] = inputJugador2.value
  jugadorinput[3] = inputJugador3.value
  jugadorinput[4] = inputJugador4.value
  jugadorinput[5] = inputJugador5.value
  jugadorinput[6] = inputJugador6.value
  jugadorinput[7] = inputJugador7.value
  jugadorinput[8] = inputJugador8.value
  jugadorinput[9] = inputJugador9.value

  

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if(jugadorinput[i]!=""&&jugadorinput[j]!=""&&i!=j&&jugadorinput[i]==jugadorinput[j]){
        document.getElementById("error").innerHTML="No se pueden repetir nombres de jugador"
        return
      }
      else{
        document.getElementById("error").innerHTML=""
      }
    }
  } 
  
  try {
  if(currentid == -1) {
    currentid = -2;
    currentid = (await axios.post('https://valpers-api.herokuapp.com/matchs')).data.id
    console.log('Id match: '+currentid)
  }
   const resp = await axios
  .put('https://valpers-api.herokuapp.com/matchs?randomize=true&choosemap=true' +'&balance='+valueBalance.value,
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
  console.log("cambios guardados")
  console.log(resp.data)
  if(redirect){
    console.log('redireccionando...')
    router.push( { path: '/game/', query: { id: currentid } })
  }
  }catch(err){
    console.error(err)
  }
}
</script>

<style scoped>
  body {
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(0, 0, 0, 4), 
          rgba(0, 0, 0, 4)
        ),
        /* bottom, image */
        url(../assets/backg.png);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 25px;
}
a {
  color: #42b983;
}
.st{
    margin-bottom: 25px;
}
.el-row {
  margin-bottom: 10px;

}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 0px;
  
}
div{
    margin-bottom: 6px;
    
}
.el-input {
  width:200px;
  margin-right: 5px;
  opacity: 0.9;
  
  }
  

.el-select .v-input_slot {
   padding-right: 0px;
   padding-bottom:0px;
   margin: 1px;
  }
.el-select {
    margin: 0 px;
    width: 130px;
    opacity: 0.85;
}
.el-option{
  margin: 10px;
  padding: 0px 0px 0px 0px;
}
.check-button-style{
  margin-top: 24px;
}

label{
  border: 0px;
  color: #f00000;
}

</style>