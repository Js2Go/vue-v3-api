import { createApp } from 'vue'
import Vant from 'vant'

import router from './router'
import store from './store'
import App from './App.vue'

import 'normalize.css'
import 'animate.css'
import 'vant/lib/index.css'
import './assets/style/index.scss'

createApp(App)
  .use(router)
  .use(store)
  .use(Vant)
  .mount('#app')
