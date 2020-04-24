<template>
  <div class="page-wrapper login-form">
    <div class="text-center">
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>

    </div>
      <form action="#" @submit.prevent="login">
          <div class="form-group">
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            <div v-if="successMessage" class="alert alert-success" role="alert">
                {{ successMessage }}
              </div>

            <div v-if="serverError" class="alert alert-danger" role="alert">
              {{ serverError }}
            </div>

            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="username" v-model="username" name="username" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input name="password" id="password" type="password" v-model="password" class="form-control"  placeholder="Password">
          </div>
          <button type="submit" class="btn btn-success login-button">Submit</button>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Remember Me?</label>
            <label class="form-check-label forget-pass" for="exampleCheck1"><a href="">Forgot Password</a></label>
          </div>
          <div class="join-now text-center">
            <small>Not a member yet?<a href="">Join now</a></small>
          </div>
        </form>


  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    dataSuccessMessage: {
      type: String,
    }
  },
  data() {
    return {
      username: '',
      password: '',
      serverError: '',
      successMessage: this.dataSuccessMessage,
      loading: false,
    }
  },
  methods: {
    login() {
      this.loading = true
      this.$store.dispatch('retrieveToken', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          this.loading = false
          this.$router.push({ name: 'todo' })
          console.log(response)
        })
        .catch(error => {
          this.loading = false
          this.serverError = error.response.data
          this.password = ''
          this.successMessage = ''
        })
    }
  }
}
</script>

<style scoped>
.login-form{
    width: 400px;
    margin: 0 auto;
    padding: 0 26px 9px;
    border: 1px solid #c7bcbc;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    perspective: 1000px;
}
.login-form i {
    font-size: 70px;
    color: #34495e;
    margin: 20px 0 20px;
}
.login-button{
  margin: 10px auto;
  display: table;
  width: 100%;

}
.login-form .checkbox{
  position: relative;
}
.login-form .form-check .forget-pass{
  position: absolute;
  right: 0;
}
.login-form .form-check .forget-pass a{
  color: #1dbf73;

}
.join-now{
  border-top: 1px solid #333;
  border-top: 1px solid #333;
  margin-top: 15px;
  padding: 10px;
}

.join-now a{
  color: #1dbf73;
}

</style>