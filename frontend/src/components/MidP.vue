<template>
    <div>
      <el-select-v2
    v-model="value"
    :options="options"
    placeholder="mapas"
    style="width: 240px"
    multiple
  />
    </div>
    <div :span="100">
      <img style="width: 500px; height: 300px" src="@/assets/maps.jpg"/>
       
    </div>
</template>

<script>
export default {
    name: 'MidP',
    props:{
    }
};
</script>
<script setup>
import axios from 'axios'
import {ref} from 'vue'
const maps =['Ascent','Bind','Breeze','Fracture','Haven','Icebox','Pearl','Split']
const value = ref([])
const options = ref(
  Array.from({ length: maps.length }).map((_, idx) => ({
    value: `Option ${idx +1}`,
    label: `${maps[idx % 10]}`,
  }))
)
const sendInfoMaps = async()=>{
  try {const resp = await axios
.put('http://localost:3000/matchs',{
  maps:[options.value]
})
console.log(resp.data)
console.log("peticion realizada")
}catch(err){
  console.error(err)
}

}
let va=0
if(va==1){
  sendInfoMaps
}
</script>



<style scoped>
label{ 
    border-style: solid;
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  margin-bottom: 20px;
}
</style>