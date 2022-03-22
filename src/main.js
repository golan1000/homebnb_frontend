import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'

const options = {
  template: ``,
  store: store,
  router: router,
}
const app = createApp(App, options)

app.use(router)
app.use(store)
app.mount('#app')
