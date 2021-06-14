<template>
  <div class="home">
    <PannelLogin v-if="!isAuthenticated" class="mt-12" />
    <PannelWelcome v-else />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  layout: 'backoffice',
  head() {
    return {
      title: 'Panel || Rich Cova',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Panel de administraciond e contenido',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      count: (state) => state.count,
      user: (state) => state.user,
    }),
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
    }),
  },
}
</script>

<style lang="sass" scoped>
.home
    @apply h-full
</style>
