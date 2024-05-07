<template>
  <div>
    <v-app-bar color="blue">
      {{ name }}
      <v-btn @click="goTo('/home')">Voltar para página principal</v-btn>
    </v-app-bar>
    <div v-for="(message, index) in messages" :key="index">
      <MessageCard :message="message" />
    </div>
    <BottomToolbar @send-message="addMessage($event)" />
  </div>
</template>

<script>
import MessageCard from '../components/chat/MessageCard.vue'
import BottomToolbar from '../components/chat/BottomToolbar.vue'

export default {
  components: {
    MessageCard,
    BottomToolbar
  },
  data() {
    return {
      name: 'Felipe Sabino',
      messages: [
        {
          name: 'Felipe Sabino',
          text: 'Olá'
        },
        {
          name: 'Felipe Sabino',
          text: 'Tudo bem?'
        }
      ]
    }
  },
  methods: {
    addMessage(eventoCapturado) {
      const objetoFormatado = this.formatarMensagem(eventoCapturado)
      this.messages.push(objetoFormatado)
    },
    formatarMensagem(texto) {
      return {
        name: 'Eu',
        text: texto
      }
    },
    goTo(path) {
      this.$router.push(path)
    }
  }
}
</script>
