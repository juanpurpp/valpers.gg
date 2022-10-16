<template> 
    <el-row :gutter="20" >

        <el-col :span="7" :name="B">
        <div class="grid-content bg-puerple-dark">
        <el-input v-model="inputBjugador1" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="BJ1">
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
        
        <el-input v-model="inputBjugador2" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="BJ2">
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
        <el-input v-model="inputBjugador3" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="BJ3">
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
        <el-input v-model="inputBjugador4" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="BJ4">
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
        <el-input v-model="inputBjugador5" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="BJ5">
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
        </div>
        </el-col>
        <el-col :span="8" :offset="1" >
            <div class="grid-content bg-puerple-dark">
                <el-button >Ingresar jugadores</el-button>
            </div>
            <div>
                <el-button color="#f5447e">Start</el-button>
            </div>  
        </el-col>
        <el-col :span="7" :offset="1" :name="R">
      <div class="grid-content bg-puerple-dark">

        <el-input v-model="inputRJugador1" placeholder="Nombre de jugador" />

        <el-select v-model="value" placeholder="Rango" value-key="RJ1">
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

        <el-input v-model="inputRJugador2" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="RJ2">
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
        <el-input v-model="inputRJugador3" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="RJ3">
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
        <el-input v-model="inputRJugador4" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="RJ4">
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
        <el-input v-model="inputRJugador5" placeholder="Nombre de jugador" />
        <el-select v-model="value" placeholder="Rango" value-key="RJ5">
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
      </div>
        </el-col>
    </el-row>
  </template>
<script>
export default {
    name: 'ContentP',
    props:{
    }
};
</script>

<Script setup>
import { ref } from 'vue'

const inputBjugador1 = ref('')
const inputBjugador2 = ref('')
const inputBjugador3 = ref('')
const inputBjugador4 = ref('')
const inputBjugador5 = ref('')

const inputRJugador1 = ref('')
const inputRJugador2 = ref('')
const inputRJugador3 = ref('')
const inputRJugador4 = ref('')
const inputRJugador5 = ref('')

</Script>
<Script setup>
import { ref } from 'vue'

const value = ref('')
const options = [],
  },
</Script>

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