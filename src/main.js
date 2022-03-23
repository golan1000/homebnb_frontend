import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import { stayService } from './services/stays-service-local.js'
import './styles/styles.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faFacebook, faInstagram)

const options = {
  template: ``,
  store: store,
  router: router,
}
const app = createApp(App, options)

app.config.globalProperties.$filters = {
  currencyUSD(amount) {
    return '$' + amount
  },
}


app.use(router)
app.use(store)
app.component("fa", FontAwesomeIcon)
app.mount('#app')
