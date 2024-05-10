import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes/router'
import { auth } from './services/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    login({ commit }, payload) {
      const { email, password } = payload
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log("Usuário logado!", result)
          commit('setUser', result.user)
        })
        .catch((error) => {
          console.error("Erro ao logar usuário", error)
          alert(error)
        })
    }
  }
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
