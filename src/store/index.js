import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
const qs = require('querystring')


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('access_token') || null,
  },
  actions: {
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response)
              console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              reject(error)
            })
        })
      }
    },
    retrieveToken(context, credentials) {
      const requestBody = {
        grant_type: "password",

        username: credentials.username,
        password: credentials.password,
        
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      return new Promise((resolve, reject) => {
        axios.post('http://13.90.171.117:8080/token', qs.stringify(requestBody), config)
          .then(response => {
            const token = response.data.access_token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
            // console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
    },



  },


  mutations: {
    retrieveToken(state, token) {
      state.token = token
    }
    ,
    destroyToken(state) {
      state.token = null
    }
    ,
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://13.90.171.117:8080/users/', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // getters: {
    //   loggedIn(state) {
    //     return state.token !== null
    //   }
    // }
    },
    getters: {
      loggedIn(state) {
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token

        // var s
        // new Promise((resolve) => {
        //   axios.get('http://13.90.171.117:8080/users/me/')
        //   .then((response) => {
        //     s=true

        //     resolve(response)
   
        //   }, () => {
        //     // reject(s=false)
        //   });
        // })

           
        
        // // s=true
        // return s
        return state.token !== null
      },
      token(state) {
        return state.token
      }},
    
  modules: {}
});
