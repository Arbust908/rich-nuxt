<template>
  <div>
    <ModalsUMS />
    <Nuxt />
  </div>
</template>

<script>
export default {
  beforeMount() {
    console.log(process.env)
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
