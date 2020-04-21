<template>
  <div class="page-wrapper login-form">
    <h2 class="login-heading">Register</h2>
    <form action="#" @submit.prevent="register">

      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div v-if="serverErrors" class="server-error">{{ serverErrors }}</div>

      <!-- <div v-if="serverErrors" class="server-error">
        <div v-for="(value, key) in serverErrors" :key="key">
          {{ value[0] }}
        </div>

      </div> -->

      <div class="form-control">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="login-input"  v-model="name" >
        <!-- <span class="form-error">{{ errors.first('name') }}</span> -->
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" class="login-input"  v-model="email" >
        <!-- <span class="form-error">{{ errors.first('email') }}</span> -->
      </div>

      <div class="form-control mb-more">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="login-input"  v-model="password" >
        <!-- <span class="form-error">{{ errors.first('password') }}</span> -->
      </div>

      <div class="form-control">
        <button type="submit" class="btn-submit">Create Account</button>
      </div>

    </form>
  </div>
</template>

<script>
// import VeeValidate from 'vee-validate'
// import CxltToastr from 'cxlt-vue2-toastr'
import axios from 'axios'


export default {
  
  data() {
    return {
      name: '',
      email: '',
      password: '',
      serverErrors: '',
      successMessage: '',
    }
  },
  methods: {

    register() {
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // }
      const requestBody = {
        email: this.email,
        name:this.name,
        password: this.password,
        
      }
      // const qs = require('querystring')

      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/users/',requestBody)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            this.serverErrors = error.response.data
            reject(error)
          })
      })
    }
  }
}
</script>
