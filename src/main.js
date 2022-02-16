import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).mount('#app')

//https://nomics.com/docs/#operation/getCurrencies
// https://api.nomics.com/v1
// 38db08c6c20c307a4a035a2c8fa14002142f5175
