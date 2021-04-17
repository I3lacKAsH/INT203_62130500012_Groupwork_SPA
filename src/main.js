import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Navbar from './components/Navbar.vue'
import Timelines from './components/Timelines.vue'


const app = createApp(App)
app.component('nav-bar', Navbar)
app.component('time-line', Timelines)
app.use(router)
app.mount('#app')
