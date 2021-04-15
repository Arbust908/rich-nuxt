<template>
  <nuxt-link
    :to="links"
    class="group text-orange-100 hover:bg-orange-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium"
    aria-current="page"
  >
    <slot name="icon"></slot>
    <span class="ml-3">{{ name }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    links: {
      type: String,
      default: '/',
    },
    name: {
      type: String,
      default: 'Inicio',
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  &.nuxt-link-exact-active {
    @apply bg-orange-800 text-white;
  }
}
</style>
