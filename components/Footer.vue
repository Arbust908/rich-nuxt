<template>
  <footer class="bg-orange-50">
    <div class="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
      <div v-if="redes" class="flex justify-center space-x-6">
        <SocialLink :link="redes.youtube || ''" name="YouTube">
          <template #icon>
            <IconYouTube class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink :link="redes.instagram || ''" name="Insagram">
          <template #icon>
            <IconInstagram class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink :link="redes.facebook || ''" name="Facebook">
          <template #icon>
            <IconFacebook class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink :link="redes.tienda || ''" name="Tienda">
          <template #icon>
            <IconShoppingCart class="w-5 h-5" />
          </template>
        </SocialLink>
        <SocialLink :link="redes.turnera || ''" name="Turnera">
          <template #icon>
            <IconCalendarDay class="w-5 h-5" />
          </template>
        </SocialLink>
      </div>
    </div>
  </footer>
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
