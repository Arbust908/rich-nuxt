<template>
  <div
    class="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-orange-50 h-2/3 sm:h-3/6 lg:h-1/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl"
        >
          <span class="text-orange-700">Antes</span>
          y <span class="text-orange-500">Despues</span>
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Clientes <strong>antes</strong> y <strong>despues</strong> de haber
          pasado por el processo del estudio!
        </p>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid sm:grid-cols-2 gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <GalerieCard
          v-for="(inform, key) in galerias"
          :key="key"
          :full-name="inform.titulo"
          :image="inform.src"
          :text="inform.texto"
          :date="inform.fecha"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Galerie',
  computed: {
    ...mapState({
      galerias: (state) => state.images,
    }),
  },
}
</script>
