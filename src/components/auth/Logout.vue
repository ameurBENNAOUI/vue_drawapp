

<script>
export default {
  created() {
    this.$store.dispatch('clearTodos')
    this.$store.dispatch('destroyToken')
      .then(response => {
        console.log(response)
        this.$router.push({ name: '/' })
      }).catch(error => {
              this.$router.push({ name: '/' })
              console.log(error)
            })
  }
}
</script>

