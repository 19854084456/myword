import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
console.log('版本3')
app.use(router)
app.mount('#app')