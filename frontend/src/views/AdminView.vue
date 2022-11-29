<template>
    <div class="admin">
      <AdminP></adminP> 
    </div>
  </template>
  <script>
  import AdminP from '@/components/AdminP.vue'
  import axios from 'axios';
    import VueCookies from 'vue-cookies'
    import router from '../router'
  export default{
    name:'AdminView',
    components:{
      AdminP
    },
    
  async BeforeCreate(){
    
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

    console.log('data es')
    console.log(data)
    const res = (axios.post('https://valpers-api.herokuapp.com/users/auth', data))
    if(res.status == 401 || res.status == 403) router.push('/Error401View',{})

    }
  }
  
  </script>