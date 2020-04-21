<template>
  <login/>
</template>

<script>
// @ is an alias to /src
import login from "@/components/auth/Login.vue";

export default {
  name: "Home",
  components: {
    login
  }
};
</script>
