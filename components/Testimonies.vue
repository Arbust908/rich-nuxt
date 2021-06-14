<template>
  <section id="redes" class="bg-white pt-16 lg:py-24">
    <div
      class="pb-16 bg-orange-600 lg:pb-0 lg:z-10 lg:relative text-center py-10"
    >
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        Nuestras Redes
      </h2>
      <div v-if="redes" class="flex max-w-xl mx-auto justify-around pt-8 pb-16">
        <a :href="redes.facebook" target="_blank">
          <IconFacebook class="icon fb" />
        </a>
        <a :href="redes.instagram" target="_blank">
          <IconInstagram class="icon ig" />
        </a>
        <a :href="redes.youtube" target="_blank">
          <IconYouTube class="icon yt" />
        </a>
        <a :href="redes.tienda" target="_blank">
          <IconShoppingCart class="icon sc" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      redes: (state) => state.social,
    }),
  },
}
</script>

<style scoped>
section {
  scroll-margin-top: 60px;
}
.icon {
  @apply w-14 h-14 p-2 rounded bg-transparent text-white transition transform ease-out duration-200;
}
.icon:hover {
  @apply bg-white bg-opacity-75 scale-110 shadow-md;
}
.fb.icon:hover {
  @apply text-blue-600;
}
.ig.icon:hover {
  @apply text-purple-400;
}
.yt.icon:hover {
  @apply text-red-600;
}
.sc.icon:hover {
  @apply text-green-600;
}
</style>
