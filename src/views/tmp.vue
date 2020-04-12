<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Ttt  />
  </div>
</template>

<script>
// @ is an alias to /src
import Ttt from "@/components/img_.vue";

export default {
  name: "Home",
  components: {
    Ttt
  }
};
</script>