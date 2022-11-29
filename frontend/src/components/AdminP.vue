<template>
    <el-row justify="space-between" style="margin:50px">
        <el-col :span="6">
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Añadir mapa"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input disabled placeholder="Proximamente Añadir Rango"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input disabled placeholder="Proximamente Añadir agente"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input v-model="addAdminInput" placeholder="Añadir admin"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" @click="addAdmin(addAdminInput)" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input disabled placeholder="Proximamente añadir partida"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
        </el-col>

        <!--   COLUMNA   -->
        <el-col :span="6">
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Quitar mapa"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input disabled placeholder="Proximamente Quitar rango"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input disabled placeholder="Proximamente Quitar agente"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input v-model="delAdminInput" placeholder="Quitar admin"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" @click="delAdmin(delAdminInput)" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input disabled placeholder="Proximamente quitar partida"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="6">
            
        </el-col>
    </el-row>
</template>

<script setup>

    import { ref } from 'vue'
    import  { ElMessageBox } from 'element-plus'
    import { h } from 'vue'
    import {Edit,Delete} from '@element-plus/icons-vue'
    import axios from 'axios';
    import VueCookies from 'vue-cookies'
    import router from '../router'

    const addAdminInput = ref('')
    const delAdminInput = ref('')
    console.log('admin panel')

    if(VueCookies.isKey("valpersUsername") && VueCookies.isKey("userToken") ){
        console.log('entry user ' + VueCookies.get("valpersUsername"))
        console.log('entry token ' + VueCookies.get("userToken"))
    }
    if (!VueCookies.get("valpersUsername") || !VueCookies.get("userToken") ) router.push('/Error401View',{})
    const data ={
            name:VueCookies.get("valpersUsername"),
            token:VueCookies.get("userToken"),
            roles:"admin"
        }
    var auth_res;
    console.log('data es')
    console.log(data)
    axios.post('https://valpers-api.herokuapp.com/users/auth',
        //body
            data
        //endbody
        ).then(response => {auth_res=response
            console.log(auth_res)
            console.log('vo eri el papu')}
        ).catch(function (error) {
            if(error.response.status == 401 || error.response.status == 403) router.push('/Error401View',{})

        })
    

    const addAdmin = async(username) =>{
        axios.put('https://valpers-api.herokuapp.com/users',
        {//body
            name: username,
            roles: ["usuario", "admin"]
        }).then(response=> {
            if(response.status==200) msg('Actualizado','Ahora '+username+' es', ' admin','green','Entendido')})
        .catch(function (error) {
            if(error.response.status == 404) msg('Error', 'El usuario' ,'no se pudo encontar', 'red','Ok')
            else msg('Oh no!', 'Ha ocurrido un ','problema', 'red','Ok')
        })
    }
    const delAdmin = async(username) =>{
        axios.put('https://valpers-api.herokuapp.com/users',
        {//body
            name: username,
            roles: ["usuario"]
        })
        .then(response=> {
            if(response.status==200) msg('Actualizado','Ahora '+username+' ya no es', ' admin','red','Entendido')})
        .catch(function (error) {
            if(error.response.status == 404) msg('Error', 'El usuario' ,'no se pudo encontar', 'red','Ok')
            else msg('Oh no!', 'Ha ocurrido un ','problema', 'red','Ok')
        })
    }
    var msg = function(titulo, msg1,msg2, color, botontxt){ //mensaje simple
        ElMessageBox({
            title: titulo,
            message: h('p', null, [
            h('span', null, msg1),
            h('i', { style: 'color: '+color }, msg2),
            ]),
            confirmButtonText: botontxt
        })
    }
</script>

<style>
.el-input {
    width:200px;
    opacity: 0.9;
    margin-left: none;
    margin-right: none;
  }

</style>
