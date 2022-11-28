<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
            <el-col span="8" :offset="2">
                <el-button size="large" @click="$router.push('/')"> Volver </el-button>
                <router-view/>
            </el-col>

        </el-row>

      </el-header>
      <el-main>
        <el-row justify="center">
            <el-col span="3">
                <img style="width: 247px; height: 70px" src="@/assets/logo.png">
                <div style="margin: 20px" />
                    <el-form
                        :model="formLabelAlign"
                        style="max-width: 460px"
                        >
                        <el-form-item>
                            <el-input v-model="formLabelAlign.name" placeholder="Nombre de usuario" />
                        </el-form-item>
                        <el-form-item>
                            <el-input
                                placeholder="ContraseÃ±a"
                                v-model="formLabelAlign.password"
                                type="password"
                                autocomplete="off"
                            />
                        </el-form-item>
                        <el-form-item>
                            <el-row :gutter="90">
                                <el-col span="1">
                                    <el-button color="#f5447e" type="primary" @click="login">Iniciar sesion</el-button>   
                                </el-col>
                                <el-col span="3">
                                    <el-button  color="#f5447e" type="primary" @click="register">Registrarse</el-button>
                                </el-col>
                            </el-row>
                        </el-form-item>
                    </el-form>
            </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>    
</template>
<script setup>
import { reactive} from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { h } from 'vue'
import axios from 'axios';
import router from '../router'
import VueCookies from 'vue-cookies'
const formLabelAlign = reactive({
  name: '',
  password: '',
})

const login = async() =>{

    //console.log('name es '+formLabelAlign.name+ "  y pass es " +formLabelAlign.password  )
    axios.post('https://valpers-api.herokuapp.com/users/login',
        //body
        {
            name: formLabelAlign.name,
            password: formLabelAlign.password 
        }
        //endbody
    ).then(loginData => {
        if(loginData.status == 200){
            msgcomplex('Logueado!', 'Has sido logueado con ', 'exito', 'green', 'Ok', true,'cargando...', 1000, 'success', 'volviendo al inicio...')
            VueCookies.set("valpersUsername", formLabelAlign.name , "7d")
            VueCookies.set("userToken", loginData.data.token , "7d")
        }
    })
    .catch(function (error) {
        if (error.response) {
            if(error.response.status == 401) msg('Erroneo', 'La contraseña o el usuario ','no coinciden', 'red', 'Ok')
        }
        else msg('Error', 'ha habido un ','error','red','Ok')
    });
    console.log('logueado');

}
const register = async() =>{
    console.log('name es '+formLabelAlign.name+ "  y pass es " +formLabelAlign.password  )
    axios.post('https://valpers-api.herokuapp.com/users',
        //body
        {
            name: formLabelAlign.name,
            password: formLabelAlign.password 
        }
        //endbody
    ).then(response =>{
        if(response.status == 200) msg('Exito!','Te has registrado ','satisfactoriamente :V','green','ok')
    }).catch(function (error) {
            if(error.response.status == 409) msg('Ya existe', 'La cuenta ' ,'ya existe', 'red','Ok')
            else msg('Oh no!', 'Ha ocurrido un ','problema', 'red','Ok')
    })
    console.log('registrado');
}
var msgcomplex = function(titulo, msg1, msg2, color, butonmsg, cargando,cargandomsg, tiempo, tipo, finalmsg){ //mensaje complejo
    ElMessageBox({
        title: titulo,
        message: h('p', null, [
        h('span', null, msg1),
        h('i', { style: 'color: '+color }, msg2),
        ]),
        confirmButtonText: butonmsg,
        beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
                instance.confirmButtonLoading = cargando
                instance.confirmButtonText = cargandomsg
                setTimeout(() => {
                    done()
                    router.push( { path: '/'})
                }, tiempo)
            } else {
                done()
            }
        },
        }).then(() => {
            ElMessage({
            type: tipo,
            message: finalmsg,
        })
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
img{
    border: 30px solid transparent;
}
label{
    border-color: transparent;
}
</style>