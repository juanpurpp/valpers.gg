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
const formLabelAlign = reactive({
  name: '',
  password: '',
})

const login = async() =>{
    console.log('name es '+formLabelAlign.name+ "  y pass es " +formLabelAlign.password  )
    var loginData = (await axios.post('http://localhost:3000/users/login',
        //body
        {
            name: formLabelAlign.name,
            password: formLabelAlign.password 
        }
        //endbody
    )).data;
    console.log(loginData);
    ElMessageBox({
        title: 'Logueado!',
        message: h('p', null, [
        h('span', null, 'Ha sido logueado con '),
        h('i', { style: 'color: green' }, 'Exito'),
        ]),
        confirmButtonText: 'OK',
        beforeClose: (action, instance, done) => {
        if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = 'volviendo...'
            setTimeout(() => {
                done()
                router.push( { path: '/'})
            }, 1000)
        } else {
            done()
        }
        },
    }).then(() => {
        ElMessage({
        type: 'success',
        message: `Volviendo a la página principal`,
    })
  })
}

const register = async() =>{
    console.log('name es '+formLabelAlign.name+ "  y pass es " +formLabelAlign.password  )
    var res = (await axios.post('http://localhost:3000/users',
        //body
        {
            name: formLabelAlign.name,
            password: formLabelAlign.password 
        }
        //endbody
    )).data;
    console.log(res);
    ElMessageBox({
        title: 'Registrado!',
        message: 'Puede loguearse :v',
        confirmButtonText: 'OK'
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