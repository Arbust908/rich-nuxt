<template>
  <nav>
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

    <button
      class="text-base font-medium text-gray-600 hover:text-orange-500"
      @click="openConsults"
    >
      Consultas
    </button>

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
