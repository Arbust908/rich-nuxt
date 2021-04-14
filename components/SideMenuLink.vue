<template>
  <router-link
    to=""
    class="group text-orange-100 hover:bg-orange-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium"
    aria-current="page"
  >
    <slot name="icon"> </slot>
    <span class="mt-2">{{ title }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'SideMenuLink',
  props: {
    title: {
      type: String,
      default: 'Link',
    },
  },
}
</script>
