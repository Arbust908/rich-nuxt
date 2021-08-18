<template>
  <div class="bg-white">
    <div
      class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center"
    >
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl font-extrabold text-orange-500 sm:text-4xl">
          Consegui promos unicas
        </h2>
        <p class="mt-3 max-w-xl text-lg text-orange-700">
          Dejanos tu información y cuando tengamos promociones u oportunidades
          unicas te las enviamos!
        </p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <label for="firstName" class="sr-only">Nombre</label>
          <input
            id="firstName"
            v-model="sub.name"
            name="firstName"
            type="text"
            autocomplete="name"
            required
            class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:max-w-xs rounded-md mb-4 md:mr-2 md:mb-0"
            placeholder="Tu Nombre"
          />
          <label for="emailAddress" class="sr-only">Email address</label>
          <input
            id="emailAddress"
            v-model="sub.email"
            name="emailAddress"
            type="email"
            autocomplete="email"
            required
            class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:max-w-xs rounded-md mb-4 md:mr-2 md:mb-0"
            placeholder="Tu Email"
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              @click.prevent="subscribe"
            >
              Sumame!
            </button>
          </div>
        </form>
        <!-- <p class="mt-3 text-sm text-gray-500">
          We care about the protection of your data. Read our
          <a href="#" class="font-medium underline"> Privacy Policy. </a>
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      sub: {
        name: '',
        email: '',
      },
    }
  },
  methods: {
    ...mapActions({
      openSuccess: 'openSuccess',
      openError: 'openError',
    }),
    async subscribe() {
      this.sub.time = new Date()
      const response = await this.$axios.post(`/info/subs/`, this.sub)
      console.log(response)
      if (response.data.status === 'success') {
        this.openSuccess(`Gracias por suscribitre!`)
      } else {
        this.openError(`Hubo un error al subscribirte!`)
      }
    },
  },
}
</script>
