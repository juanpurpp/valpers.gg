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
                                placeholder="Contraseña"
                                v-model="formLabelAlign.pasword"
                                type="password"
                                autocomplete="off"
                            />
                        </el-form-item>
                        <el-form-item>
                            <el-row :gutter="90">
                                <el-col span="1">
                                    <el-button color="#f5447e" type="primary">Iniciar sesion</el-button>   
                                </el-col>
                                <el-col span="3">
                                    <el-button  color="#f5447e" type="primary">Registrarse</el-button>
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

const formLabelAlign = reactive({
  name: '',
  pasword: '',
})
</script>
<style>
img{
    border: 30px solid transparent;
}
label{
    border-color: transparent;
}
</style>