<template>
  <div id="app">
    <!-- <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link>
    </nav> -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Draw App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <router-link  class="nav-item nav-link active" to='/'>Home <span class="sr-only">(current)</span></router-link >
            <router-link  class="nav-item nav-link" to='/upload_template'>Upload Templates</router-link >
            <router-link  class="nav-item nav-link" to='/view_template'>View Templates</router-link >
            <router-link  class="nav-item nav-link disabled" to='/about'>About</router-link >

            <router-link v-if="!loggedIn" :to="{name:'login'}"  class="nav-item nav-link" >Login</router-link >
            <router-link v-if="!loggedIn" :to="{name:'regester'}"  class="nav-item nav-link">Regester</router-link >
            <router-link v-if="loggedIn" :to="{name:'logout'}"  class="nav-item nav-link" >Logout</router-link >
            </div>
        </div>
        </nav>
            <router-view />

  </div>


</template>

<script>
// import "font-awesome/css/font-awesome.css"

export default {
  computed:{
    loggedIn(){
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style>
.nav-item nav-link disabled
{
  margin-right: 680px;
}
</style>