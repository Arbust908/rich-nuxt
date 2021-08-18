<template>
  <nav class="flex items-center">
    <button
      class="text-base font-medium text-gray-600 hover:text-orange-500"
      @click="openPolitics"
    >
      Politica
    </button>

    <a
      href="#redes"
      class="text-base font-medium text-gray-600 hover:text-orange-500"
    >
      Redes
    </a>
    <a
      href="https://wa.me/5491138766488"
      target="_blank"
      class="text-base font-medium text-gray-600 hover:text-orange-500"
    >
      Consultas
    </a>
    <a
      v-if="redes"
      :href="redes.youtube"
      target="_blank"
      class="text-base font-medium text-gray-600 hover:text-orange-500"
    >
      Videos
    </a>

    <a
      v-if="redes"
      :href="redes.tienda"
      target="_blank"
      class="text-base font-medium text-gray-600 hover:text-orange-500"
    >
      Tienda
    </a>
    <button
      class="text-base font-medium bg-orange-500 text-white hover:text-orange-500 hover:bg-white px-3 py-1 rounded hover:shadow-lg transition transform duration-150 hover:scale-105 hover:-translate-y-0.5"
      @click.prevent="openConsults"
    >
      Reservar Turno
    </button>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      redes: (state) => state.social,
    }),
  },
  methods: {
    ...mapActions({
      openPolitics: 'openPolitics',
      openConsults: 'openConsults',
    }),
  },
}
</script>
