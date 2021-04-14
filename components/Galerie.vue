<template>
  <div
    class="relative bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-orange-50 h-1/3 sm:h-2/3"></div>
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
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <GalerieCard full-name="Persona 1" image="BA-1.jpg" />
        <GalerieCard full-name="Persona 2" image="BA-2.jpg" />
        <GalerieCard full-name="Persona 3" image="BA-3.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galerie',
}
</script>
