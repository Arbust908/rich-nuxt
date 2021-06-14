<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex">
          <h1 class="flex-1 text-2xl font-bold text-gray-900">Fotos</h1>
          <!-- <div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center">
            <button
              type="button"
              class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <IconSolidViewList class="h-5 w-5" />
              <span class="sr-only">Use list view</span>
            </button>
            <button
              type="button"
              class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <IconSolidViewGrid class="h-5 w-5" />
              <span class="sr-only">Use grid view</span>
            </button>
          </div> -->
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
