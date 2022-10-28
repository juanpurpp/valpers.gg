<template>

    <el-row :gutter="20" >

        <el-col :span="7">
        <div class="grid-content bg-puerple-dark">
        <el-input type="text" v-model="inputJugador0" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="BJ1">
        <el-option-group
            v-for="group in options"
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
        -->
        <el-input v-model="inputJugador1" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="BJ2">
        <el-option-group
            v-for="group in options"
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
        </el-select>-->
        <el-input v-model="inputJugador2" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="BJ3">
        <el-option-group
            v-for="group in options"
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
        </el-select>-->
        <el-input v-model="inputJugador3" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="BJ4">
        <el-option-group
            v-for="group in options"
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
        </el-select>-->
        <el-input v-model="inputJugador4" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="BJ5">
        <el-option-group
            v-for="group in options"
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
        </el-select>-->
        </div>
        </el-col>
        <el-col :span="8" :offset="1" >
            <div>
      <el-button @click="$router.push('game');sendInfo()">Start</el-button>
  <router-view/>
            </div>  
        </el-col>
        <el-col :span="7" :offset="1">
      <div class="grid-content bg-puerple-dark">

        <el-input v-model="inputJugador5" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="RJ1">
    <el-option-group
      v-for="group in options"
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
  </el-select>-->
        <el-input v-model="inputJugador6" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="RJ2">
    <el-option-group
      v-for="group in options"
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
  </el-select>-->
        <el-input v-model="inputJugador7" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="RJ3">
    <el-option-group
      v-for="group in options"
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
  </el-select>-->
        <el-input v-model="inputJugador8" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="RJ4">
    <el-option-group
      v-for="group in options"
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
  </el-select>-->
        <el-input v-model="inputJugador9" placeholder="Nombre de jugador" />
        <!--<el-select v-model="value" placeholder="Rango" value-key="RJ5">
    <el-option-group
      v-for="group in options"
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
  </el-select>-->
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

const sendInfo = async()=>{
  try {const resp = await axios
.put('http://localhost:3000/matchs',
{
  id: 1,
  map: "Haven",
  ready: false,
  team1:
  [
      {
          name: inputJugador0.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador1.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador2.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador3.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador4.value,
          rank: "Plata 1"
      },
  ],
  team2:
  [
      {
          name: inputJugador5.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador6.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador7.value,
          rank: "Plata 1"
      },
      {
          name: inputJugador8.value,
        rank: "Plata 1"
      },
      {
          name: inputJugador9.value,
          rank: "Plata 1"
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
    margin-bottom: 10px;
    
}
.el-input {width:270px;
    margin-right: 5px;}
</style>