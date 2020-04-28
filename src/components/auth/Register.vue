<template>

      <div class="page-wrapper register-form">
    <div class="text-center">
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>

    </div>
      <form action="#" @submit.prevent="register">
          <div class="form-group">
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            <div v-if="successMessage" class="alert alert-success" role="alert">
                {{ successMessage }}
              </div>

            <div v-if="serverError" class="alert alert-danger" role="alert">
              {{ serverError }}
            </div>

            <label for="exampleInputEmail1">Choose username</label>
            <input type="text" v-model="name" class="form-control"   name="username" aria-describedby="emailHelp" placeholder="Enter username">


            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="username" v-model="email" name="username" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input name="password" id="password" type="password" v-model="password" class="form-control"  placeholder="Password">
          </div>
          <button type="submit" class="btn btn-success register-button">Registers</button>
          <div class="have-account text-center">
            <small>Already a member?<a href="">Sign In</a></small>
          </div>
        </form>


  </div>
</template>

<script>
// import VeeValidate from 'vee-validate'
// import CxltToastr from 'cxlt-vue2-toastr'

import axios from 'axios'
import store from '../../store'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.token


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
            this.$router.push({ name: 'login' })
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

<style scoped>
.register-form{
    width: 400px;
    margin: 0 auto;
    padding: 0 26px 9px;
    border: 1px solid #c7bcbc;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    perspective: 1000px;
}
.register-form i {
    font-size: 70px;
    color: #34495e;
    margin: 20px 0 20px;
}
.register-button{
  margin: 10px auto;
  display: table;
  width: 100%;

}
.register-form .checkbox{
  position: relative;
}
.login-form .form-check .forget-pass{
  position: absolute;
  right: 0;
}
.login-form .form-check .forget-pass a{
  color: #1dbf73;

}
.have-account{
  border-top: 1px solid #333;
  border-top: 1px solid #333;
  margin-top: 15px;
  padding: 10px;
}

.have-account a{
  color: #1dbf73;
}

</style>