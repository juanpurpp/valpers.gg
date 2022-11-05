import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import VueSelectImage from 'vue-select-image'
import 'element-plus/theme-chalk/dark/css-vars.css'
require('vue-select-image/dist/vue-select-image.css')
const app = createApp(App)
app.component('vue-select-image',VueSelectImage)
app.use(VueSelectImage)
app.use(router)
app.use(ElementPlus,{ size: 'medium', zIndex: 3000,})
app.mount('#app')