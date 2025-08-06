import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log('版本ai智能助手')
app.use(router)
app.mount('#app')