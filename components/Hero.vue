<template>
  <main
    v-if="hero"
    class="lg:relative bg-orange-50 flex flex-col-reverse md:flex-row"
  >
    <div
      class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
    >
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1
          class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
        >
          <span class="block text-orange-900 xl:inline">{{
            heroMainTitle
          }}</span>
          <span class="block text-orange-600 xl:inline">{{ heroTitle }}</span>
        </h1>
        <p
          class="mt-3 max-w-md mx-auto font-bold text-xl text-orange-300 sm:text-2xl md:mt-5 md:max-w-3xl"
        >
          {{ subtitle }}
        </p>
        <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md">
            <button
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow-lg hover:bg-orange-700 md:py-4 md:text-lg md:px-10"
              @click="openConsults"
            >
              {{ btnMain.title }}
            </button>
          </div>
          <div class="mt-3 rounded-md sm:mt-0 sm:ml-3">
            <a
              :href="btnSecond.link"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-transparent transition duration-300 ease-out transform hover:-translate-y-2 hover:shadow hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              {{ btnSecond.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative w-full h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover lg:rounded-bl-md"
        :src="getApiImage(heroImage)"
        alt="Imagen de Rich Cova"
      />
    </div>
  </main>
</template>

<script>
import picaso from '@/mixins/picaso'
import { mapActions, mapState } from 'vuex'
export default {
  mixins: [picaso],
  computed: {
    ...mapState({
      hero: (state) => state.hero,
    }),
    heroMainTitle() {
      return this.hero && this.hero.titulo[0]
    },
    heroTitle() {
      return this.hero && this.hero.titulo[1]
    },
    subtitle() {
      return this.hero && this.hero.subtitle
    },
    btnMain() {
      return this.hero && this.hero.buttons.main
    },
    btnSecond() {
      return this.hero && this.hero.buttons.second
    },
    heroImage() {
      return this.hero && this.hero.heroSrc
    },
  },
  methods: {
    ...mapActions({
      openConsults: 'openConsults',
    }),
  },
}
</script>
