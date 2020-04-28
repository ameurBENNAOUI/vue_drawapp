import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from 'axios/dist/axios.min.js'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + $store.getters.token


// import VeeValidate from 'vee-validate'
// import CxltToastr from 'cxlt-vue2-toastr'

Vue.config.productionTip = false;
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: '/upload_template',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
