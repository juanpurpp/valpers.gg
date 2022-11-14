import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)
app.use(router)
app.use(ElementPlus,{ size: 'medium', zIndex: 3000,})
app.mount('#app')