<template>
  <div  id="app">

    
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><span>Draw</span><small>App</small></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></router-link >
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Templates
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" to='/upload_template'>Upload Templates</router-link >
                  <router-link class="dropdown-item" to='/view_template'>View Templates</router-link >
                </div>
              </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Extract Info
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to='upload_pdf_queue?name=default'>upload pdf queue</router-link >
                <router-link class="dropdown-item" to='/view_pdf_queue'>view pdf queue</router-link >
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to='/about'>About us</router-link >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 login-join">
            <button v-if="!loggedIn" :to="{name:'login'}" class="btn btn-outline-success my-2 my-sm-0 login" >Log in</button>
            <button v-if="!loggedIn" :to="{name:'regester'}" class="btn btn-outline-success my-2 my-sm-0 join" >Join</button>
            <button v-if="loggedIn" :to="{name:'logout'}" class="btn btn-outline-success my-2 my-sm-0 login" >Log out</button>
        </form>
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
body{
    font-family: 'Roboto', sans-serif;
}


 /* nabvar */
.login-join button:first-child{
    margin-right:15px;
}
.login-join a{
    text-decoration: none;
    border-radius: 5%;
    font-weight: bold;
    color: #34495e;
}
a span{
    color: #ff4747;
    font-weight: bold;
}
.navbar-dark .navbar-nav .nav-link {
    color: #fff;
}
.login,.join {
    color: #fff;
}

</style>