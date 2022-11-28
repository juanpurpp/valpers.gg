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
                    <el-input placeholder="Añadir Rango"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Añadir agente"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Añadir admin"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="primary" :icon="Edit" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Añadir partida"/>
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
                    <el-input placeholder="Quitar rango"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Quitar agente"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Quitar admin"/>
                </el-col>
                <el-col :span ="6">
                    <el-button type="danger" :icon="Delete" circle />
                </el-col>
            </el-row>
            <el-row justify="space-between">
                <el-col :span ="6">
                    <el-input placeholder="Quitar partida"/>
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
    import {Edit,Delete} from '@element-plus/icons-vue'
    import axios from 'axios';
    import VueCookies from 'vue-cookies'
    import router from '../router'

    
    console.log('admin panel')

    if(VueCookies.isKey("valpersUsername") && VueCookies.isKey("userToken") ){
        console.log('entry user ' + VueCookies.get("valpersUsername"))
        console.log('entry token ' + VueCookies.get("userToken"))
    }
    
    else auth_res = "unauthorized"
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
    if(auth_res.data  != "authorized user") router.push('/',{})})
    

    
    
</script>

<style>
.el-input {
    width:200px;
    opacity: 0.9;
    margin-left: none;
    margin-right: none;
  }

</style>
