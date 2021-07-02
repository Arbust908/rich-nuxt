<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <h1 class="flex-1 text-2xl font-bold text-gray-900">Fotos</h1>
        </div>
        <section
          class="mt-8 pb-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8"
          aria-labelledby="gallery-heading"
        >
          <PannelFotosCard
            v-for="(inform, key) in images"
            :key="key"
            :full-name="inform.titulo"
            :image="inform.src"
            :text="inform.texto"
            :date="inform.fecha"
          />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Fotos',
  layout: 'backoffice',
  middleware: 'mustBeLogged',
  data() {
    return {
      images: null,
    }
  },
  head() {
    return {
      title: 'Fotos || Rich Cova',
    }
  },

  computed: {
    ...mapState({
      galerias: (state) => state.images,
    }),
  },

  async beforeMount() {
    const response = await this.$axios.get(`/info/images/`)
    this.images = response.data.data
  },
}
</script>
