<template>
  <div>
    Olá, estou na home!!!!
    <v-btn @click="navegar('/beyond')">Ir para o chat</v-btn>
  </div>
</template>

<script>

export default {
  methods: {
    navegar(path) {
      this.$router.push(path)
    }
  }
}


</script>