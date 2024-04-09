<template>
  <v-app>
    <v-main>
      <v-app-bar color="blue">{{ name }}</v-app-bar>
      <div v-for="(message, index) in messages" :key="index">
        <MessageCard :message="message"/>
      </div>
      <BottomToolbar @send-message="addMessage($event)" />
    </v-main>
  </v-app>
</template>
  
<script>
import MessageCard from './components/MessageCard.vue'
import BottomToolbar from './components/BottomToolbar.vue'

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
        },
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
    }
  }
}
</script>
  