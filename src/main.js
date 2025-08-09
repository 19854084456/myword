import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log(' 1版本ai智能助手api ')
app.use(router)
app.mount('#app')