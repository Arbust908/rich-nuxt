<template>
  <a
    :href="link"
    :title="name"
    target="_blank"
    class="text-gray-400 hover:text-orange-400"
  >
    <span class="sr-only">{{ name }}</span>
    <slot name="icon">
      <div class="w-5 h-5 fill-current"></div>
    </slot>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'YouTube',
    },
    link: {
      type: String,
      default: 'https://www.youtube.com/',
    },
  },
}
</script>
